import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/_helpers/must-match.validator';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component implements OnInit {

  minDate = new Date();
  list:any []=[];
  registerForm: FormGroup;
    submitted = false
  constructor(private fb:FormBuilder,private route:Router) { 
    this.registerForm = this.fb.group({
      
      firstName: ['', [Validators.required, Validators.maxLength(25)]],
      lastName: ['', [Validators.required, Validators.maxLength(25)]],
      email: ['', [Validators.required, Validators.email]],
      Company: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      date: ['', Validators.required],
      Role: ['', Validators.required]
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });
   
  
  }

  ngOnInit(): void {
    
  
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
      this.list.push(this.registerForm.value)
      const queryParams: any = {};
      queryParams.myArray = JSON.stringify(this.list);

      const navigationExtras: NavigationExtras = {
        queryParams
      };
     this.route.navigate(['sibling2'],navigationExtras) ;
      console.log(this.list);

    //  localStorage.setItem('myLSkey', JSON.stringify(this.list));

  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }
}
