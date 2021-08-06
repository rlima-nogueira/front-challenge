import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TaskListComponent } from './task-list.component';
import { TaskListModule } from './module/task-list.module';
import { TaskListService } from './service/task-list.service';

describe('TaskListComponent', () => {

  let fixture: ComponentFixture<TaskListComponent> = null;
  let component: TaskListComponent;
  let service: TaskListService;
  let injector: TestBed;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TaskListModule
      ],
      declarations: [
        TaskListComponent,
      ], providers: [
        HttpClientTestingModule
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;

    injector = getTestBed();
    service = TestBed.inject(TaskListService);
  });


  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

});
