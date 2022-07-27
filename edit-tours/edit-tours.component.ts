import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ToursService} from "../../tours.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-edit-tours',
  templateUrl: './edit-tours.component.html',
  styleUrls: ['./edit-tours.component.css']
})
export class EditToursComponent implements OnInit {
  formEdit = new FormGroup({
    title: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl('')
  })
  id:any = 0;
  constructor(private tourService: ToursService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id')
      this.getTours(this.id);
    });
  }
obj:any;

  ngOnInit(): void {
  }
  getTours(id:any){
     this.tourService.getById(id).subscribe(data => {
      this.formEdit = new FormGroup({
        title: new FormControl(data.title),
        price: new FormControl(data.price),
        description: new FormControl(data.description)
      })
    });

  }
  edit(id:any){
    this.obj={
      title: this.formEdit.value.title,
      price: this.formEdit.value.price,
      description: this.formEdit.value.description
    };

    this.tourService.editTours(id,this.obj).subscribe((data)=>{
      this.router.navigate(['tours'])
    },error => {
      console.log(error)
    })
  }


}
