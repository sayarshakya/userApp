import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface User {
  id?: number;
  name: string;
  age: number;
  phone: string;
  status: string;
  designation: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://localhost:7016/api/User';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }
}
