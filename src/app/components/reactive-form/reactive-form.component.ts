import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from  '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})

export class ReactiveFormComponent implements OnInit {
  myForm: FormGroup;
  ngOnInit() {

    this.myForm = new FormGroup({
      name: new FormControl('',[Validators.required,Validators.minLength(4)]),
      age: new FormControl('',[Validators.required, Validators.maxLength(3)])

    });
  }

  onClickSubmit(formData) {
    console.log('Coronal Effected Patient name is : ' + formData.name);
    console.log('Coronal Effected Patient age is : ' + formData.age);
  }
  
  get name() {
    return this.myForm.get('name');
  }
  
  get age() {
    return this.myForm.get('age');
  }

}
















 

 