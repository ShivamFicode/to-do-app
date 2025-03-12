import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  val: string = '';
  task: string[] = [];
  editInd: number = -1;
  editVal: string = '';

  addTask() {
    if (this.val.trim()) {
      this.task.push(this.val.trim());
      this.val = '';
    }
  }

  deleteTask(ind: number) {
    this.task.splice(ind, 1);
  }

  editTask(ind: number) {
    this.editInd = ind;
    this.editVal = this.task[ind];
  }

  save() {
    if (this.editVal.trim() && this.editInd !== -1) {
      this.task[this.editInd] = this.editVal.trim();
      this.editInd = -1;
    }
  }

  cancel() {
    this.editInd = -1;
  }

  trackByIndex(ind: number) {
    return ind;
  }
}
