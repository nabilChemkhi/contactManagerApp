import { Contact } from './../models/contact';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiBaseUrl='http://localhost:8084/contact';


  constructor(private http: HttpClient) {

  }

  public getAllContacts(): Observable<Contact[]>{
    return this.http.get<Contact[]>(`${this.apiBaseUrl}/getAll`);

  }

  public addContact(contact:Contact): Observable<Contact>{
    return this.http.post<Contact>(`${this.apiBaseUrl}/add`,contact);

  }

  public updateContact(contact:Contact): Observable<Contact>{
    return this.http.put<Contact>(`${this.apiBaseUrl}/update`,contact);

  }

  public deleteContact(id:number):Observable<void>{
     return this.http.delete<void>(`${this.apiBaseUrl}/delete/${id}`);

  }


}