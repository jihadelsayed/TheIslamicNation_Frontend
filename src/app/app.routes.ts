// src/app/app.routes.ts
import { Routes } from '@angular/router';

// Guards (functional, generated via --implements CanActivate)
import { authGuard } from './core/guards/auth.guard';
import { adminGuard } from './core/guards/admin.guard';
import { verifiedGuard } from './core/guards/verified.guard';

// Resolver (generated: ng g resolver features/groups/group-detail)

// 404 page (eager import is fine)
import { NotFoundComponent } from './core/layout/not-found/not-found.component';
import { groupDetailResolver } from './features/groups/group-detail.resolver';

// NOTE: Chat dock is a fixed UI element; mount it in AppShell, not as a route.

export const routes: Routes = [
  // App shell wrapper route (optional). If your AppShell hosts header/footer/sidenav,
  // you can use a component-less route + children or just mount shell in app.component.
  {
    path: '',
    // If you want an actual shell route, uncomment the next line and generate an app-shell route component.
    // loadComponent: () => import('./core/layout/app-shell/app-shell.component').then(m => m.AppShellComponent),
    children: [
      // Home
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./features/home/home-page/home-page.component').then(m => m.HomePageComponent),
        title: 'Home',
      },

      // Search
      {
        path: 'search',
        loadComponent: () =>
          import('./features/search/search-page/search-page.component').then(m => m.SearchPageComponent),
        title: 'Search',
      },

      // Groups
      {
        path: 'groups',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./features/groups/group-list/group-list.component').then(m => m.GroupListComponent),
            title: 'Groups',
          },
          {
            path: 'create',
            canActivate: [authGuard, verifiedGuard],
            loadComponent: () =>
              import('./features/groups/group-create/group-create.component').then(m => m.GroupCreateComponent),
            title: 'Create Group',
          },
          {
            path: ':slug',
            resolve: { group: groupDetailResolver },
            loadComponent: () =>
              import('./features/groups/group-detail/group-detail.component').then(m => m.GroupDetailComponent),
            title: 'Group',
          },
          {
            path: ':slug/settings',
            canActivate: [authGuard],
            loadComponent: () =>
              import('./features/groups/group-settings/group-settings.component').then(m => m.GroupSettingsComponent),
            title: 'Group Settings',
          },
          {
            path: ':slug/members',
            loadComponent: () =>
              import('./features/groups/group-members/group-members.component').then(m => m.GroupMembersComponent),
            title: 'Group Members',
          },
        ],
      },

      // Posts
      {
        path: 'posts',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./features/posts/post-list/post-list.component').then(m => m.PostListComponent),
            title: 'Posts',
          },
          {
            path: 'compose',
            canActivate: [authGuard, verifiedGuard],
            loadComponent: () =>
              import('./features/posts/post-compose/post-compose.component').then(m => m.PostComposeComponent),
            title: 'Compose Post',
          },
          {
            path: ':id',
            loadComponent: () =>
              import('./features/posts/post-detail/post-detail.component').then(m => m.PostDetailComponent),
            title: 'Post',
          },
        ],
      },

      // Q&A
      {
        path: 'qa',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./features/qa/question-list/question-list.component').then(m => m.QuestionListComponent),
            title: 'Q&A',
          },
          {
            path: 'ask',
            canActivate: [authGuard, verifiedGuard],
            loadComponent: () =>
              import('./features/qa/ask-page/ask-page.component').then(m => m.AskPageComponent),
            title: 'Ask a Question',
          },
          {
            path: ':id',
            loadComponent: () =>
              import('./features/qa/question-detail/question-detail.component').then(m => m.QuestionDetailComponent),
            title: 'Question',
          },
        ],
      },

      // Live
      {
        path: 'live',
        loadComponent: () =>
          import('./features/live/live-page/live-page.component').then(m => m.LivePageComponent),
        title: 'Live',
      },

      // Events
      {
        path: 'events',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./features/events/events-page/events-page.component').then(m => m.EventsPageComponent),
            title: 'Events',
          },
          {
            path: 'create',
            canActivate: [authGuard, verifiedGuard],
            loadComponent: () =>
              import('./features/events/event-create/event-create.component').then(m => m.EventCreateComponent),
            title: 'Create Event',
          },
          {
            path: ':id',
            loadComponent: () =>
              import('./features/events/event-detail/event-detail.component').then(m => m.EventDetailComponent),
            title: 'Event',
          },
        ],
      },

      // Resources (Literature)
      {
        path: 'resources',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./features/resources/resources-page/resources-page.component').then(m => m.ResourcesPageComponent),
            title: 'Resources',
          },
          {
            path: ':id',
            loadComponent: () =>
              import('./features/resources/resource-detail/resource-detail.component').then(m => m.ResourceDetailComponent),
            title: 'Resource',
          },
        ],
      },

      // Notifications
      {
        path: 'notifications',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/notifications/notifications-panel/notifications-panel.component')
            .then(m => m.NotificationsPanelComponent),
        title: 'Notifications',
      },

      // Profile
      {
        path: 'profile',
        children: [
          {
            path: ':slug',
            loadComponent: () =>
              import('./features/profile/profile-page/profile-page.component').then(m => m.ProfilePageComponent),
            title: 'Profile',
          },
          {
            path: ':slug/edit',
            canActivate: [authGuard],
            loadComponent: () =>
              import('./features/profile/profile-edit/profile-edit.component').then(m => m.ProfileEditComponent),
            title: 'Edit Profile',
          },
          {
            path: ':slug/groups',
            loadComponent: () =>
              import('./features/profile/profile-groups/profile-groups.component').then(m => m.ProfileGroupsComponent),
            title: 'User Groups',
          },
          {
            path: ':slug/posts',
            loadComponent: () =>
              import('./features/profile/profile-posts/profile-posts.component').then(m => m.ProfilePostsComponent),
            title: 'User Posts',
          },
        ],
      },

      // Admin
      {
        path: 'admin',
        canActivate: [authGuard, adminGuard],
        children: [
          {
            path: 'announcements',
            loadComponent: () =>
              import('./features/admin/announcements/announcements.component').then(m => m.AnnouncementsComponent),
            title: 'Admin • Announcements',
          },
          {
            path: 'moderation',
            loadComponent: () =>
              import('./features/admin/moderation-queue/moderation-queue.component')
                .then(m => m.ModerationQueueComponent),
            title: 'Admin • Moderation',
          },
          { path: '', pathMatch: 'full', redirectTo: 'announcements' },
        ],
      },
    ],
  },
{
  path: 'roadmap',
  loadComponent: () =>
    import('./features/roadmap/roadmap.component').then(m => m.RoadmapComponent),
  title: 'Roadmap',
},

  // 404
  { path: '**', component: NotFoundComponent, title: 'Not Found' },
];
