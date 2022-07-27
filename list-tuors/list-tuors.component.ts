import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ToursService} from "../../tours.service";

@Component({
  selector: 'app-list-tuors',
  templateUrl: './list-tuors.component.html',
  styleUrls: ['./list-tuors.component.css']
})
export class ListTuorsComponent implements OnInit {

listTours : any;
  constructor(private httpCline: HttpClient,
              private toursService: ToursService) { }

  ngOnInit(): void {
    this.getAllTours();

  }
  getAllTours(){
    this.toursService.findAll().subscribe((data)=>{
      this.listTours = data;
    },error => {
      console.log(error)
    })
  }
  delete(id: any) {
    if (confirm('Are you sure you want to delete?')) {
      this.toursService.deleteTours(id).subscribe(() => {
        alert("Ok");
      }, e => {
        console.log(e);
      });
    }
  }



}
