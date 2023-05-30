import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../service.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-childdetails',
  templateUrl: './childdetails.component.html',
  styleUrls: ['./childdetails.component.scss']
})
export class ChilddetailsComponent implements OnInit{

  getchilddet:any;

  constructor(public service:ServiceService, public actrouter:ActivatedRoute){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    let id=this.actrouter.snapshot.paramMap.get('id')
    this.service.getchilddet(id).subscribe((data)=>{
      this.getchilddet=data;
    })

  }

}
