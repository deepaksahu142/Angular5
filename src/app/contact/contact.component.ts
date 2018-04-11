import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  // userForm =  new FormGroup({
  //   name : new FormControl('Brandon', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
  //   email :  new FormControl(),
  //   address :  new FormGroup({
  //     street : new FormControl(),
  //     city :  new FormControl(),
  //     postalcode: new FormControl(null,Validators.pattern('^[1-9][0-9]{4}$')),
  //   })
  // });

  formDatas = [];
  newData;
  userForm: FormGroup;
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {

    this.userForm = this._formBuilder.group({
      name : ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      email : ['', [Validators.required]],
      address : this._formBuilder.group({
          street : ['', [Validators.required]],
          city : ['', [Validators.required]],
          postalcode: [null, [Validators.pattern('^[1-9][0-9]{4}$')] ]
      })
    });
  }
  onSubmit() {
    console.log(this.userForm.value) ;
    this.newData = this.userForm.value;
    this.formDatas.push(this.newData);
    this.userForm.reset();
  }

  updateData(i: number , name: string , email: string , street: string, city: string, postalcode: number) {
    this.userForm.patchValue({name: name , email: email});
  }

  deleteData(i: number) {
    this.formDatas.splice(i);
  }

}
