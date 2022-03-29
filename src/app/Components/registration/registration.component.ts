import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private authService: AuthService,private router: Router, private formBuilder: FormBuilder) { }
   //Form Validables 
   registerForm:any =  FormGroup;
   submitted = false;

 get f() { return this.registerForm.controls; }
 
  ngOnInit(): void {
   //Add User form validations
   this.registerForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.submitted = true;
console.log(this.registerForm.value);
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    this.authService.register(this.registerForm.value.email,this.registerForm.value.password)
        .pipe(first())
        .subscribe({
            next: () => {
                this.router.navigate(['/login']);
            },
            
        });
}
}
