import { ChangeDetectionStrategy, Component } from '@angular/core';
 import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

type Category = {
  id: string;
  title: string;
  route?: string;
  colorVar?: string;
  children?: Category[];
};

type DrawnNode = {
  id: string;
  title: string;
  x: number;
  y: number;
  r: number;
  colorVar?: string;
  level: number;       // 0=root, 1=child
  parentId?: string;
  isChild?: boolean;
};
@Component({
  selector: 'app-roadmap',
  imports: [RouterModule,CommonModule],
    standalone: true,

  templateUrl: './roadmap.component.html',
  styleUrl: './roadmap.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoadmapComponent {
  constructor(private router: Router) {}

  // ---------- DATA ----------
  roots: Category[] = [
    {
      id: 'creed', title: 'Creed', route: '/creed',
      colorVar: 'var(--highlight-quaternary-color)',
      children: [
        { id: 'allah', title: 'Allah', route: '/creed/allah' },
        { id: 'angels', title: 'Angels', route: '/creed/angels' },
        { id: 'prophets', title: 'Prophets', route: '/creed/prophets' },
        { id: 'destiny', title: 'Destiny', route: '/creed/destiny' },
        { id: 'judgment', title: 'Judgment Day', route: '/creed/judgment' },
      ]
    },
    {
      id: 'pillars', title: 'Pillars', route: '/pillars',
      colorVar: 'var(--accent-color-medium)',
      children: [
        { id: 'shahada', title: 'Shahada', route: '/pillars/shahada' },
        { id: 'salah', title: 'Salah', route: '/pillars/salah' },
        { id: 'zakat', title: 'Zakat', route: '/pillars/zakat' },
        { id: 'sawm', title: 'Sawm', route: '/pillars/sawm' },
        { id: 'hajj', title: 'Hajj', route: '/pillars/hajj' },
      ]
    },
    {
      id: 'provisions', title: 'Provisions', route: '/provisions',
      colorVar: 'var(--tertiary-color)',
      children: [
        { id: 'charity', title: 'Charity', route: '/provisions/charity' },
        { id: 'etiquette', title: 'Etiquette', route: '/provisions/etiquette' },
      ]
    },
    {
      id: 'jurisprudence', title: 'Jurisprudence', route: '/jurisprudence',
      colorVar: 'var(--secondary-color)',
      children: [
        { id: 'fiqh-worship', title: 'Fiqh of Worship', route: '/jurisprudence/worship' },
        { id: 'fiqh-family', title: 'Family', route: '/jurisprudence/family' },
        { id: 'fiqh-commerce', title: 'Commerce', route: '/jurisprudence/commerce' },
      ]
    },
    {
      id: 'rhetoric', title: 'Rhetoric', route: '/rhetoric',
      colorVar: 'var(--accent-color-dark)',
      children: [
        { id: 'balagha', title: 'Balagha', route: '/rhetoric/balagha' },
        { id: 'maqasid', title: 'Maqasid', route: '/rhetoric/maqasid' },
      ]
    },
    {
      id: 'muslims', title: 'Muslims', route: '/muslims',
      colorVar: 'var(--highlight-secondary-color)',
      children: [
        { id: 'history', title: 'History', route: '/muslims/history' },
        { id: 'societies', title: 'Societies', route: '/muslims/societies' },
      ]
    }
  ];

  rootLayout: Record<string, {x:number;y:number;r:number}> = {
    creed:         { x: 600, y: 350, r: 70 },
    pillars:       { x: 860, y: 260, r: 52 },
    provisions:    { x: 900, y: 460, r: 52 },
    jurisprudence: { x: 330, y: 260, r: 56 },
    rhetoric:      { x: 300, y: 480, r: 50 },
    muslims:       { x: 600, y: 120, r: 48 },
  };

  expanded = new Set<string>(); // which roots are open

  // ---------- DRAWN NODES ----------
  get drawnNodes(): DrawnNode[] {
    const all: DrawnNode[] = [];

    for (const root of this.roots) {
      const L = this.rootLayout[root.id];
      if (!L) continue;

      all.push({
        id: root.id, title: root.title, x: L.x, y: L.y, r: L.r,
        colorVar: root.colorVar, level: 0
      });

      if (this.expanded.has(root.id) && root.children?.length) {
        // use NO-OVERLAP placement
        const childR = Math.max(34, Math.round(L.r * 0.6));
        const placed = this.placeChildrenNoOverlap(
          L.x, L.y, L.r,
          root.children.map(c => ({ id: c.id, r: childR }))
        );

        root.children.forEach(c => {
          const p = placed.find(pp => pp.id === c.id)!;
          all.push({
            id: c.id, title: c.title,
            x: p.x, y: p.y, r: childR,
            colorVar: c.colorVar ?? root.colorVar,
            level: 1, parentId: root.id, isChild: true,
          });
        });
      }
    }
    return all;
  }

  // edges drawn from parent perimeter → child perimeter
  get drawnEdges() {
    const edges: {x1:number;y1:number;x2:number;y2:number}[] = [];
    const byId = new Map(this.drawnNodes.map(n => [n.id, n]));
    for (const n of this.drawnNodes) {
      if (!n.parentId) continue;
      const p = byId.get(n.parentId);
      if (!p) continue;
      const dx = n.x - p.x, dy = n.y - p.y;
      const len = Math.max(1, Math.hypot(dx, dy));
      const ux = dx / len, uy = dy / len;
      edges.push({
        x1: p.x + ux * (p.r - 1.5),
        y1: p.y + uy * (p.r - 1.5),
        x2: n.x - ux * (n.r - 1.5),
        y2: n.y - uy * (n.r - 1.5),
      });
    }
    return edges;
  }

  // ---------- ANGULAR FLEX RING ----------
  private PADDING = 10;
  private START_ANGLE = -Math.PI / 2;

  private placeChildrenNoOverlap(
    cx: number,
    cy: number,
    parentR: number,
    kids: { id: string; r: number }[],
  ) {
    const R = Math.max(90, parentR * 1.55);
    const step = (2 * Math.PI) / Math.max(kids.length, 1);
    const items = kids.map((k, i) => ({ id: k.id, r: k.r, θ: this.START_ANGLE + i * step }));

    const twoπ = 2 * Math.PI;
    for (let iter = 0; iter < 100; iter++) {
      let moved = false;
      items.sort((a, b) => a.θ - b.θ);
      items.forEach(it => { it.θ = ((it.θ % twoπ) + twoπ) % twoπ; });

      for (let i = 0; i < items.length; i++) {
        const a = items[i];
        const b = items[(i + 1) % items.length];
        const gap = (b.θ - a.θ + twoπ) % twoπ;
        const need = 2 * Math.asin((a.r + b.r + this.PADDING) / (2 * R));
        if (!isFinite(need)) continue;
        if (gap + 1e-6 < need) {
          const d = (need - gap) / 2;
          a.θ -= d; b.θ += d;
          moved = true;
        }
      }
      if (!moved) break;
    }

    return items.map(it => ({
      id: it.id,
      r: it.r,
      x: Math.round(cx + Math.cos(it.θ) * R),
      y: Math.round(cy + Math.sin(it.θ) * R),
      angle: it.θ,
      orbit: R,
    }));
  }

  // ---------- UI handlers ----------
  onPlanetClick(n: DrawnNode, ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();

    if (n.level === 0) {
      // toggle root expansion
      if (this.expanded.has(n.id)) this.expanded.delete(n.id);
      else this.expanded.add(n.id);
      return;
    }

    // child: navigate if route exists
    const root = this.roots.find(r => r.id === n.parentId);
    const target = root?.children?.find(c => c.id === n.id);
    if (target?.route) this.router.navigate([target.route]);
  }

  trackById = (_: number, n: DrawnNode) => n.id;

  hasIcon(id: string): boolean { return !!this.iconName(id); }
  iconName(id: string): string {
    switch (id) {
      case 'creed':         return 'Language.png';
      case 'pillars':       return 'Megaphone.png';
      case 'provisions':    return 'Webcam.png';
      case 'jurisprudence': return 'Literature.png';
      case 'rhetoric':      return 'News.png';
      case 'muslims':       return 'People.png';
      // children (example mappings)
      case 'allah':         return 'Language.png';
      case 'angels':        return 'People.png';
      case 'prophets':      return 'Blog.png';
      case 'destiny':       return 'Image.png';
      case 'judgment':      return 'Search.png';
      case 'shahada':       return 'Megaphone.png';
      case 'salah':         return 'Video.png';
      case 'zakat':         return 'rating.png';
      case 'sawm':          return 'News.png';
      case 'hajj':          return 'People.png';
      default:              return '';
    }
  }
}
