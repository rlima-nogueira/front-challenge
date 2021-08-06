import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';

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
  public taskList: Array<object>;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {

    this.taskList = [
      {
        "id": 1,
        "name": "Task 1",
        "done": false
      },
      {
        "id": 2,
        "name": "Task 2",
        "done": true
      },
    ]

    this.tasks = this.formBuilder.group({
      checkBoxTask: new FormControl(''),
      task: new FormControl(''),
    });


  }

  public taskSave(): void {
      console.log(this.tasks.value.task);
  }

   public atualizarTask(event: MatCheckboxChange): void {

    console.log('teste', event.checked);
   }

}
