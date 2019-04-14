import { Component } from "@angular/core";

import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { ProfileService } from "./inscription.service";
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
user : User = new User();
avatar : string;
selectedItem : string ='';
  constructor(private ProfileService: ProfileService,
    public dialog: MatDialog, 
      private router : Router) {}

//cropper
ngOnInit(): void {
  this.ProfileService.getAvatar().subscribe((croppedImage)=>{
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
updateProfile() {
  const obj = {
    prenom: "meriem",
    nom :"chaieb",
    cin :12838233,
    telephone : 58414498,
  };
  this.user = obj

//.set : ecrase les autres informations 

  this.ProfileService
    .updateProfile(this.user)
    .then((data: any) => {
      this.ProfileService.showMsg("user updated");
      console.log(data);
    })
    .catch(error => {
      console.error(error.message);
    });
}



  // //register
  // register() {
  //   const obj = {
  //     email: "ali.bensalah@gmail.com",
  //     password: "654789123"
  //   };
  //   this.ProfileService.register(obj.email, obj.password).then((data: any) => {

  //     this.user.email = obj.email;
  //     this.ProfileService
  //       .createUsers(this.user, data.user.uid)
  //       .then(() => {
  //         this.ProfileService.showMsg("user created");
  //       })
  //       .catch(error => {
  //         console.error(error.message);
  //       });
  //   });
  // }
  // mot de passe hidden

  hide = true;

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  matcher = new MyErrorStateMatcher();
}
