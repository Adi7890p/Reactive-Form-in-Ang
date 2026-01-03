import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  // templateUrl: './app.component.html',
  template: `

  <form class="row g-3 needs-validation" [formGroup]="userForm" (ngSubmit)="onSubmit()" novalidate>
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationCustom01" formControlName="firstName" >
    
    <div class="text-danger" *ngIf="f['firstName'].touched && f['firstName'].invalid">
      <span *ngIf="f['firstName'].errors?.['required']">Don't leave this field empty</span>
      <span *ngIf="f['firstName'].errors?.['minlength']">Minimum 3 characters required</span>
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationCustom02" formControlName="lastName" >
    <div class="text-danger" *ngIf="f['lastName'].touched">
      <span *ngIf="f['lastName'].errors?.['required']">Don't leave this field empty</span>
      <span *ngIf="f['lastName'].errors?.['minlength']">Minimum 3 characters required</span>
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustomUsername" class="form-label">Username</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend">&#64;</span>
      <input type="text" class="form-control" id="validationCustomUsername" formControlName="username" aria-describedby="inputGroupPrepend" >
      <div class="text-danger" *ngIf="f['username'].touched && f['username'].invalid">
        <span *ngIf="f['username'].errors?.['required']">Don't leave this field empty</span>
        <span *ngIf="f['username'].errors?.['email']">Keep it in email format</span>
      
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationCustom03" class="form-label">City</label>
    <input type="text" class="form-control" formControlName="city" id="validationCustom03" >
    <div class="text-danger" *ngIf="f['city'].touched">
      <span *ngIf="f['city'].errors?.['required']">Don't leave this field empty</span>
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationCustom04" class="form-label">State</label>
    <select class="form-select" formControlName="state" id="validationCustom04" >
      <option selected disabled value="">Choose...</option>
      <option>Gj</option>
      <option>Up</option>
      <option>MH</option>
    </select>
    <div class="text-danger" *ngIf="f['state'].touched">
      <span *ngIf="f['state'].errors?.['required']">Choose a state</span>
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationCustom05" class="form-label">Zip</label>
    <input type="text" class="form-control" formControlName="zip" id="validationCustom05" >
    <div class="text-danger" *ngIf="f['zip'].touched">
      <span *ngIf="f['zip'].errors?.['required']">Don't leave this field empty</span>
      <span *ngIf="f['zip'].errors?.['pattern']">Keep it in zip format(6 digits codeS)</span>
    </div>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" formControlName="agree" type="checkbox" value="" id="invalidCheck" >
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="text-danger" *ngIf="f['agree'].touched">
      <span *ngIf="f['agree'].errors?.['requiredtrue']">Check it before submitting</span>
    </div>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit" [disabled]="userForm.invalid">Submit form</button>
  </div>
</form>
  
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'relative1';

  private fb = inject(FormBuilder);

  userForm: FormGroup = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    username: ['', [Validators.required, Validators.email]],
    city: ['', [Validators.required]],
    state: ['', [Validators.required]],
    zip: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
    agree: [false, [Validators.requiredTrue]]
  })

  get f() {
    return this.userForm.controls;
  }

  onSubmit() {
    console.log(this.userForm.value);
  }


}
