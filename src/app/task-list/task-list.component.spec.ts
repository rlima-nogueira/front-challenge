import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TaskListComponent } from './task-list.component';
import { TaskListModule } from './module/task-list.module';
import { TaskListService } from './module/task-list.service';

describe('TaskListComponent', () => {

  let fixture: ComponentFixture<TaskListComponent> = null;
  let component: TaskListComponent;
  let injector: TestBed;
  let httpMock: HttpTestingController;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TaskListModule,
        TaskListService
      ],
      declarations: [ TaskListComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
