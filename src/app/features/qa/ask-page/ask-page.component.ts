import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-ask-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './ask-page.component.html',
  styleUrls: ['./ask-page.component.scss'],
})
export class AskPageComponent {
  model = {
    title: '',
    body: '',
    tagsCsv: '',
    school: '', // optional: Hanafi/Shafi'i/etc.
  };

  submit() {
    const tags = this.model.tagsCsv
      .split(',')
      .map(t => t.trim())
      .filter(Boolean);
    // UI-only; later post to backend
    alert(`Ask question:\n${JSON.stringify({ ...this.model, tags }, null, 2)}`);
  }
}
