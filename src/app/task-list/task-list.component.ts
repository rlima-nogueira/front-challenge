import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Task } from './model/task-list';
import { TaskListService } from './service/task-list.service';

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
  public isInputInvalid: boolean = false;
  public isInputInvalidCharacter: boolean = false;

  public icones = {
    faTrashAlt,
  };

  constructor(
    private formBuilder: FormBuilder,
    private service: TaskListService,
  ) { }

  public ngOnInit(): void{
    this.loadForm();
    this.handleTaskSearch();

  }

  private loadForm(): void {
    this.tasks = this.formBuilder.group({
      checkBoxTask: new FormControl(''),
      task: new FormControl(null, Validators.compose([Validators.required])),
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
    const format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    this.isInputInvalidCharacter = format.test(this.tasks.value.task);

    if (this.isValid()) {
      return;
    } else {
      const task: Task = {
        item: this.tasks.value.task,
        done: false
      };

      const sizeObject = Object.keys(this.taskList).length;

      if (sizeObject === 100) {
        alert('Você atingiu o limite de 100 tarefas cadastradas.');
        return;
      }

      (await this.service.saveTask(task)).subscribe(() => {
        this.tasks.controls.task.reset();
        this.handleTaskSearch();
      });
    }

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

  public isValid(): boolean {
    if (this.isInputInvalidCharacter) {
      alert(' Remova os caracteres especiais!');
      return true;
    }
    if (this.tasks.value.task === '' || this.tasks.value.task === null) {
      this.isInputInvalid = true;
      return true;
    }
    return false;
  }

}
