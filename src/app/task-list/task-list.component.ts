import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  public tasks: FormGroup;
  public taskList: Array<object>;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {

    this.taskList = [
      {
        "id": 1,
        "name": "Task 1",
      },
      {
        "id": 2,
        "name": "Task 2",
      },
    ]

    this.tasks = this.formBuilder.group({
      checkBoxTask: new FormControl([]),
      task: new FormControl(''),
    });
  }

  public taskSave(): void {
      console.log(this.tasks.value.task);
  }

}
