import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../interface/user';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})

export class FormulaireComponent implements OnInit {

   
  /*myForm!: FormGroup;*/
  myForm = new FormGroup({
    Nom: new FormControl("", [Validators.required,Validators.minLength(2)]),
    Prenom: new FormControl("", [Validators.required]),
    Courriel: new FormControl("", [Validators.required, Validators.email]),
    Age: new FormControl("", [Validators.required]),
  }) 

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

       
    /*this.myForm = this.formBuilder.group({
      Nom:'',
      Prénom:'',
      Courriel:'',
      Age: Number,
    })*/
  }

  get nom() {
    return this.myForm.get("Nom");
  }
  get prenom() {
    return this.myForm.get("Prenom");
  }
  get age() {
    return this.myForm.get("Age");
  }
  get courriel() {
    return this.myForm.get("Courriel");
  }

  onSubmit() {
    alert(JSON.stringify(this.myForm.value));
  }
    
}
