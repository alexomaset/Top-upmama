import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  
  constructor(private authService: AuthService,private router: Router, private formBuilder: FormBuilder) { }
   //Form Validables 
   loginForm: any = FormGroup;
   submitted = false;

 get f() { return this.loginForm.controls; }
 
//login form
  ngOnInit(): void {

   //Add User form validations
   this.loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.loginForm.value);
    if(this.loginForm.invalid){
      return;
    }
    this.authService.register(this.loginForm.value.email,this.loginForm.value.password)
        .pipe(first())
        .subscribe({
            next: () => {
                this.router.navigate(['/login']);
            },
            
        });
      }
}