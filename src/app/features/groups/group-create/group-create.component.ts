import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-group-create',
  imports: [CommonModule, FormsModule],
  templateUrl: './group-create.component.html',
  styleUrls: ['./group-create.component.scss'],
})
export class GroupCreateComponent {
  model = { name: '', slug: '', visibility: 'public', desc: '' };

  submit() {
    // UI-only; later call GroupApiService.create(this.model)
    alert(`Create group:\n${JSON.stringify(this.model, null, 2)}`);
  }
}
