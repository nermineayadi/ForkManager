import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, } from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import { ShareService } from 'src/app/services/share.service';
import { User } from 'src/app/models/user.model';
@Component({
  selector: 'app-cpersonnel',
  templateUrl: './cpersonnel.component.html',
  
})
export class CPersonnelComponent implements OnInit {

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
  constructor(public dialogRef: MatDialogRef<CPersonnelComponent>, private shareService: ShareService,) {}
  ngOnInit() {
  }
      onNoClick(): void {
        this.dialogRef.close();
      }
    //creer utilisateur
  register() {
    const obj = {
      email: this.email.value,
      nom: this.nom.value,
      prenom: this.prenom.value,
     cin: this.cin.value,
     
     fonction: this.fonction.value,
     password: this.password.value,
    };
    this.shareService.authentification(obj.email,obj.password).then((data: any) => {

      this.user.email = obj.email;
      this.user.nom = obj.nom;
      this.user.prenom = obj.prenom;
      this.user.cin = obj.cin;
      
      this.user.fonction = obj.fonction;
      
      this.shareService
        .createUsers(this.user, data.user.uid)
        .then(() => {
          this.shareService.showMsg("user created");
        })
        .catch(error => {
          console.error(error.message);
        });
    })
    .catch(error => {this.shareService.showMsg(error.message);});
  }

}
