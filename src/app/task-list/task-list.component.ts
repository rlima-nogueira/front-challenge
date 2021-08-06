import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Task } from './task-list';
import { TaskListService } from './task-list.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  public tasks: FormGroup = new FormGroup({
    checkBoxTask: new FormArray([]),
    task: new FormControl(''),
  });
  public taskList: Task;

  public icones = {
    faTrashAlt,
  };

  private format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  constructor(
    private formBuilder: FormBuilder,
    private service: TaskListService,
  ) { }

  public ngOnInit(): void {
    this.loadForm();
    this.handleTaskSearch();
  }

  private loadForm(): void {
    this.tasks = this.formBuilder.group({
      checkBoxTask: new FormControl(''),
      task: new FormControl(''),
    });
  }


  private async handleTaskSearch(): Promise<void> {
    (await this.service.searchTask()).subscribe((tasks) => {
      Object.entries(tasks).forEach(([_, value]) => {
        this.taskList = value;
      });
    });
  }

  public async handleTaskSave(): Promise<void> {
    if (this.format.test(this.tasks.value.task)) {
      alert('Por favor, Remova os caracteres especiais.');
      return;
    }

    const task: Task = {
      item: this.tasks.value.task,
      done: false
    };

    (await this.service.saveTask(task)).subscribe(() => {
      this.tasks.controls.task.reset();
      this.handleTaskSearch();
    });
  }

  public async handleTaskDelete(id: number): Promise<void> {
    (await this.service.deleteTask(id)).subscribe(() => {
      this.handleTaskSearch();
    });
  }

  public async handleTaskUpdate(id: number, event: MatCheckboxChange): Promise<void> {
    const task: Task = {
      id,
      done: event.checked
    };

    (await this.service.updateTask(task)).subscribe(() => {
      this.handleTaskSearch();
    });
  }

}
