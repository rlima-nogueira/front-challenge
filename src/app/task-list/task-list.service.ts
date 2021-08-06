import { Task } from './task-list';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskListService {

  private URL_API = 'https://61088c1dd73c6400170d3981.mockapi.io/api/v1/tasks';


  constructor(
    private http: HttpClient,
  ) { }

  public async searchTask(): Promise<Observable<Array<Task>>> {
    return this.http.get<Array<Task>>(`${this.URL_API}`);
  }

  public async saveTask(task: Task): Promise<Observable<Array<Task>>> {
    return this.http.post<Array<Task>>(`${this.URL_API}`, task);
  }

  public async updateTask(task: Task): Promise<Observable<Array<Task>>> {
    return this.http.put<Array<Task>>(`${this.URL_API}/${task.id}`, task);
  }


  public async deleteTask(id: number): Promise<Observable<number>> {
    return this.http.delete<number>(`${this.URL_API}/${id}`);
  }

}
