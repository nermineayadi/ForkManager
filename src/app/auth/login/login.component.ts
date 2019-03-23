import { Component, OnInit } from "@angular/core";
import { ShareService } from "src/app/services/share.service";
import { User } from "src/app/models/user.model";
import {FormControl, Validators} from '@angular/forms';

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

  constructor(private shareService: ShareService) {}

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
    this.shareService
      .logIn(obj.email, obj.password)
      .then((data: any) => {
        this.shareService.showMsg("user registred");
        console.log(data);
        localStorage.setItem("uid", data.user.uid);
        this.loading= false;
      })
      .catch(error => {
        console.error(error.message);
        this.shareService.showMsg(error.message);
        this.loading= false;

      });
  }

  updateProfile() {
    const obj = {
      prenom: "meriem",
      nom :"chaieb",
      cin :12838233,
      telephone : 58414498,
    };
    this.user = obj

//.set : ecrase les autres informations 

    this.shareService
      .updateProfile(this.user)
      .then((data: any) => {
        this.shareService.showMsg("user updated");
        console.log(data);
      })
      .catch(error => {
        console.error(error.message);
      });
  }
}
