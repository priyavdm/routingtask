import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url='http://localhost:3000';

  constructor(private http:HttpClient) { }

  getparent(){
    return this.http.get(this.url+ '/getparent');
  }
  getchild(){
    return this.http.get(this.url+ '/getchild')
  }
  getchilddet(id:string|null){
    return this.http.get(this.url+ '/childdet/' +id)
  }
  getparentdet(id:string|null){
    return this.http.get(this.url+ '/parentdet/' +id)
  }
}
