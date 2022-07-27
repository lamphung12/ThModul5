import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ToursService} from "../../tours.service";

@Component({
  selector: 'app-create-tours',
  templateUrl: './create-tours.component.html',
  styleUrls: ['./create-tours.component.css']
})
export class CreateToursComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl('')
  })
  obj: any;

  constructor(private httpCline: HttpClient, private router: Router,
              private tourService: ToursService) {
  }

  ngOnInit(): void {
  }

  create() {
    this.obj = {
      title: this.form.value.title,
      price: this.form.value.price,
      description: this.form.value.description
    };
    this.tourService.save(this.obj).subscribe((data) => {
      console.log(this.obj);
      this.obj = data;
      this.router.navigate(['tours'])
    }, error => {
      console.log(error)
    })
  }


}
