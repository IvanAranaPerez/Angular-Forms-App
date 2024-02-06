import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
})
export class SwitchesPageComponent implements OnInit {


  public myForm: FormGroup = this.fb.group({
    gender: [ 'M', Validators.required ],
    wantNotifications: [ true, Validators.required ],
    termsAndConditions: [ false, Validators.requiredTrue ],
  });

  public person = {
    gender: 'F',
    wantNotifications: false,
  }

  ngOnInit(): void {
    this.myForm.reset( this.person );
  }

  constructor( private fb: FormBuilder ) {}

  isValidSwitch( switchfield: string ): boolean | null {
    return this.myForm.controls[switchfield].errors
    && this.myForm.controls[switchfield].touched;
  }

  onSave() {
    if (this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }

    const { termsAndConditions, ...newPerson } = this.myForm.value;

    this.person = newPerson;
    console.log(this.myForm.value);
    console.log(this.person);
  }

}
