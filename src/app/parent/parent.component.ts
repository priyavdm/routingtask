import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../service.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit{

  getparentdata:any;

  constructor(public service:ServiceService, public router:Router){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.getparent();
  }

  getparent(){
    this.service.getparent().subscribe((data)=>{
      this.getparentdata=data;
    })
  }
  //it will written for button
  list(id:string|null){
    this.router.navigate(['parent',id])
  }

}
