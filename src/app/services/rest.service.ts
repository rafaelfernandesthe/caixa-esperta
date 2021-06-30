import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  baseUrl:string = "http://photoupload.mocklab.io";

  constructor(private httpClient : HttpClient) { }

  getList() : Observable<any> {
    return this.httpClient.get(
        this.baseUrl + "/all"
      ).pipe(
        map((body: any) => {
            return body;
        })
      );
  }

  postPhoto(postData) : Observable<any> {
    return this.httpClient.post(
        this.baseUrl + "/add",
        postData
      ).pipe(
        map((body: any) => {
            return body;
        })
      );
  }

  registryError(errorDetail) : Observable<any> {
    return this.httpClient.post(
        this.baseUrl + "/error/add",
        errorDetail
      ).pipe(
        map((body: any) => {
            return body;
        })
      );
  }

  getJsonHeaders(): HttpHeaders {
    const headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    return headers;
  }
}
