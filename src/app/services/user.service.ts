import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from '../models/iuser';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http = {};

  constructor(private httpClient: HttpClient) {
    this.http = {
      headers: new HttpHeaders({ 'content-type': 'application/json' }),
    };
  }

  signUpUser(newUser: Iuser): Observable<Iuser> {
    return this.httpClient.post<Iuser>(
      `${environment.baseAPIURL}/users`,
      JSON.stringify(newUser),this.http
    );
  }
}
