import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { CPersonnelService } from './cpersonnel.service';
import { User } from 'src/app/models/user.model';
@Component({
  selector: 'app-cpersonnel',
  templateUrl: './cpersonnel.component.html',

})
export class CPersonnelComponent implements OnInit {
 hide = true
  user: User = new User();
  email = new FormControl('', [Validators.required, Validators.email]);
  nom = new FormControl('', [Validators.required]);
  prenom = new FormControl('', [Validators.required]);
  cin = new FormControl('', [Validators.required]);

  fonction = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  constructor(public dialogRef: MatDialogRef<CPersonnelComponent>, private CPersonnelService: CPersonnelService, ) { }
  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  //creer utilisateur
  register() {
    const obj = {
      responsable:localStorage.getItem('uid'),
      token :'',
      email: this.email.value,
      nom: this.nom.value,
      prenom: this.prenom.value,
      fonction: this.fonction.value,
      password: this.password.value,
    };
    this.CPersonnelService.authentification(obj.email, obj.password).then((data: any) => {

      this.user.email = obj.email;
      this.user.nom = obj.nom;
      this.user.prenom = obj.prenom;
      this.user.fonction = obj.fonction;
      this.user.token = obj.token;
      this.user.responsable=obj.responsable;
      this.CPersonnelService
        .createUsers(this.user, data.user.uid)
        .then(() => {
          this.CPersonnelService.showMsg("personnel créé avec succès");
        })
        .catch(error => {
          console.error(error.message);
        });
    })
      .catch(error => { this.CPersonnelService.showMsg(error.message); });
  }

  close(){
    this.dialogRef.close();
  }
}

