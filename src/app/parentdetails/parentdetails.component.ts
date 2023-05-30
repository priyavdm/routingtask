import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../service.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-parentdetails',
  templateUrl: './parentdetails.component.html',
  styleUrls: ['./parentdetails.component.scss']
})
export class ParentdetailsComponent implements OnInit{

  getparentdet:any;

  constructor(public service:ServiceService, public ActRoute:ActivatedRoute){}

  //inject activeroute & service
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    let id=this.ActRoute.snapshot.paramMap.get('id')
    this.service.getparentdet(id).subscribe((data)=>{
      this.getparentdet=data;
    })
  }

}
