import { Component } from "@angular/core";

import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { ShareService } from "src/app/services/share.service";
import { User } from 'src/app/models/user.model';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { CropperComponent } from '../cropper/cropper.component';



export class MyErrorStateMatcher implements ErrorStateMatcher {
  
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}



@Component({
  selector: "app-inscription",
  templateUrl: "./inscription.component.html",
  styleUrls: ["./inscription.component.scss"]
})
export class InscriptionComponent {
// user : User = new User();
avatar : string;
selectedItem : string ='';
  constructor(private shareService: ShareService,
    public dialog: MatDialog, 
      private router : Router) {}

//cropper
ngOnInit(): void {
  this.shareService.getAvatar().subscribe((croppedImage)=>{
      this.avatar = croppedImage;
  })

}
//bouton enregistrer 
onChange(topic : string ){
  this.selectedItem= topic ;
  this.router.navigate(['/'+topic]);
}

openModel(e){
const dialogRef = this.dialog.open(CropperComponent, {
    data: e,
    width:"400px"
  });
}
//quand je click j'ouvre la fenetre pour choisir mon avatar //
onchange(evt){
    this.openModel(evt);

}



  // //register
  // register() {
  //   const obj = {
  //     email: "ali.bensalah@gmail.com",
  //     password: "654789123"
  //   };
  //   this.shareService.register(obj.email, obj.password).then((data: any) => {

  //     this.user.email = obj.email;
  //     this.shareService
  //       .createUsers(this.user, data.user.uid)
  //       .then(() => {
  //         this.shareService.showMsg("user created");
  //       })
  //       .catch(error => {
  //         console.error(error.message);
  //       });
  //   });
  // }

  //login
  login() {
    const obj = {
      email: "meriem.chaieb@live.fr",
      password: "123456789"
    };
    this.shareService
      .logIn(obj.email, obj.password)
      .then(() => {
        this.shareService.showMsg("user registred");
      })
      .catch(error => {
        console.error(error.message);
      });
  }

  // mot de passe hidden

  hide = true;

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  matcher = new MyErrorStateMatcher();
}
