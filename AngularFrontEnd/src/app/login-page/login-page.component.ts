import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {


  public user: any;
  public error: string = "";
  public loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    let username = this.loginForm.value['username'];
    let password = this.loginForm.value['password'];

    if((username != null && username !== "") && (password != null && password !== "")){
      this.loginForm.reset();
      this.router.navigate(['/home']);
    }else{
      this.loginForm.reset();
      this.error = "Please enter username and password";
    }
  }
}