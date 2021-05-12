import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Developer } from '../models/Developer';

@Injectable({
  providedIn: 'root'
})
export class DevelopersService {

  constructor(private http: HttpClient) { }

  baseUrl = `${environment.Url}/api/developers`;
  
  getAll(): Observable<Developer[]> {
    return this.http.get<Developer[]>(`${this.baseUrl}`);
  }

  getById(id: number): Observable<Developer> {
    return this.http.get<Developer>(`${this.baseUrl}/${id}`);
  }

  post(developer: Developer) {
    return this.http.post(`${this.baseUrl}`, developer)
  }

  put(developer: Developer) {
    return this.http.put(`${this.baseUrl}/${developer.id}`, developer)
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
