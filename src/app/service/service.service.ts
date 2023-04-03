import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http"
import { User } from '../modelo/user';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private _url=environment.url;
  

  constructor(private http:HttpClient) {
   
   }
   
   getUserById(id: string  ){
    return this.http.get<User>(`${this._url}?id=${id}`)
   }
   postUser(user: User){
    return this.http.post(this._url, user)
   }



}
