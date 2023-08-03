import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from '../model/person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
 })
export class PersonService {

  private personsUrl: string;

  constructor(private http: HttpClient) {
    this.personsUrl = 'http://localhost:8080/users';
  }

  public findAll(): Observable<Person[]> {
    return this.http.get<Person[]>(this.personsUrl);
  }

  public save(person: Person) {
    return this.http.post<Person>(this.personsUrl, person);
  }
}