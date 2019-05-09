import { Component, OnInit } from "@angular/core";
import { LoginService } from "./login.service";
import { User } from "src/app/srecette/user.model";
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  hide = true;

  user: User = new User();
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  loading = false;

  constructor(private LoginService: LoginService , private router : Router, private shareService : ShareService) {}

  ngOnInit(): void {}

get isValid():boolean{
    return this.email.invalid || this.password.invalid ; 
}

//   getErrorMessageEmail() {
//     return this.email.hasError('required') ? 'You must enter a value' :
//         this.email.hasError('email') ? 'Not a valid email' :
//             '';
//   }

  
  login() {

    this.loading=true;
    const obj = {
      email: this.email.value,
      password: this.password.value
    };
    this.LoginService
      .logIn(obj.email, obj.password)
      .then((data: any) => {
        this.shareService.getProfile(data.user.uid).subscribe((profile : any)=>{
          this.LoginService.showMsg("Bonjour");
          console.log(data);
         localStorage.setItem("uid", data.user.uid);
         localStorage.setItem('fonction', profile.fonction);
         localStorage.setItem('profile', JSON.stringify(profile));
         this.router.navigate(['']);
          this.loading= false;
        })
      })
      .catch(error => {
        console.error(error.message);
        this.LoginService.showMsg(error.message);
        this.loading= false;

      });
  }
}
