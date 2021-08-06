import { faTrash } from '@fortawesome/free-solid-svg-icons';
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
    faTrash,
  };

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
      Object.entries(tasks).forEach(([key, value]) => {
        this.taskList = value;
      });
    });
  }

  public taskSave(): void {
      console.log(this.tasks.value.task);
  }

   public atualizarTask(event: MatCheckboxChange): void {

    console.log('teste', event.checked);
   }

}
