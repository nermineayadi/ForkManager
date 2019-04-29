import { Component } from "@angular/core";

import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormBuilder,
  FormGroup
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { ProfileService } from "./inscription.service";
import { User } from 'src/app/models/user.model';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { CropperComponent } from '../cropper/cropper.component';
import { Location } from '@angular/common';
import { ShareService } from 'src/app/services/share.service';
import { Profile } from 'selenium-webdriver/firefox';



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
  avatar: string;
  selectedItem: string = '';
  profileForm: FormGroup
  profile = JSON.parse(localStorage.getItem('profile'))
  constructor(private ProfileService: ProfileService, private formBuilder: FormBuilder,private location : Location,
    public dialog: MatDialog,
    private router: Router,
    public shareService : ShareService , 
    ) {
    this.profileForm = this.formBuilder.group({
      nom: new FormControl(this.profile.nom, Validators.required),
      prenom: new FormControl(this.profile.prenom, Validators.required),
      adresse: new FormControl(this.profile.adresse, Validators.required),
      specialite: new FormControl(this.profile.specialite, Validators.required),
      codePostal: new FormControl(this.profile.codePostal, Validators.required),
      telephone: new FormControl(this.profile.telephone, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
      ville: new FormControl(this.profile.ville, Validators.required),
      dateNaiss: new FormControl(this.profile.dateNaiss, Validators.required),
    })
  }

  //cropper
  ngOnInit(): void {
    this.ProfileService.getAvatar().subscribe((croppedImage) => {
      this.avatar = croppedImage;
    })
    if (this.profile.avatar!=''){
      this.shareService.setAvatar(this.profile.avatar)
    }

  }
  //bouton enregistrer 
  onChange(topic: string) {
    this.selectedItem = topic;
    this.router.navigate(['/' + topic]);
  }

  openModel(e) {
    const dialogRef = this.dialog.open(CropperComponent, {
      data: {file : e, filename : e.target.files[0].name},
      width: "400px"
    });
  }
  //quand je click j'ouvre la fenetre pour choisir mon avatar //
  onchange(evt) {
    this.openModel(evt);

  }
  update() {
    //.set : ecrase les autres informations 

    this.ProfileService
      .updateProfile(this.profileForm.value)
      .then(()=> {
        this.ProfileService.showMsg("profile modifié");
        this.profile.nom = this.profileForm.value.nom
        this.profile.prenom = this.profileForm.value.prenom
        this.profile.specialite = this.profileForm.value.specialite
        this.profile.dateNaiss = this.profileForm.value.dateNaiss
        this.profile.telephone = this.profileForm.value.telephone
        this.profile.adresse = this.profileForm.value.adresse
        this.profile.ville = this.profileForm.value.ville
        this.profile.codePostal = this.profileForm.value.codePostal
        localStorage.setItem('profile',JSON.stringify(this.profile))

      })
      .catch(error => {
        console.error(error.message);
      });
  }
  goBack(){
    this.location.back();
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
