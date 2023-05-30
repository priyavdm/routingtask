import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../service.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit{

  getchilddata:any;

  constructor(public service:ServiceService, public router:Router){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.getchild();
  }

  getchild(){
    this.service.getchild().subscribe((data)=>{
      this.getchilddata=data;
    })
  }

  list(id:string|null){
    this.router.navigate(['child',id]);
  }

}
