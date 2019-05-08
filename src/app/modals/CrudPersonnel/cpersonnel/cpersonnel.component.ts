import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { CPersonnelService } from './cpersonnel.service';
import { User } from 'src/app/srecette/user.model';
@Component({
  selector: 'app-cpersonnel',
  templateUrl: './cpersonnel.component.html',
  styleUrls:['./cpersonnel.component.scss']

})
export class CPersonnelComponent implements OnInit {
 hide = true
  user: User = new User();
  email = new FormControl('', [Validators.required, Validators.email]);
  nom = new FormControl('', [Validators.required]);
  prenom = new FormControl('', [Validators.required]);
  fonction = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  telephone= new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]);


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
      telephone : this.telephone.value
    };
    this.CPersonnelService.authentification(obj.email, obj.password).then((data: any) => {
      this.user.telephone=obj.telephone;
      this.user.email = obj.email;
      this.user.nom = obj.nom;
      this.user.prenom = obj.prenom;
      this.user.fonction = obj.fonction;
      this.user.token = obj.token;
      this.user.responsable=obj.responsable;
      this.CPersonnelService
        .createUsers(this.user, data.user.uid)
        .then((user : any) => {
          this.CPersonnelService.showMsg("personnel créé avec succès");
          this.dialogRef.close({user})
        })
        .catch(error => {
          console.error(error.message);
        });
    })
      .catch(error => { this.CPersonnelService.showMsg(error.message); });
  }
  get isValid(): boolean {
    return this.nom.invalid || this.prenom.invalid || this.email.invalid
      || this.password.invalid || this.fonction.invalid || this.telephone.invalid ;
  }
  close(){
    this.dialogRef.close();
  }
}

