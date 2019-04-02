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
    //register
  register() {
    const obj = {
      email: "salah@gmail.com",
      password: "741852963"
    };
    this.shareService.register(obj.email, obj.password).then((data: any) => {

      this.user.email = obj.email;
      this.shareService
        .createUsers(this.user, data.user.uid)
        .then(() => {
          this.shareService.showMsg("user created");
        })
        .catch(error => {
          console.error(error.message);
        });
    });
  }

}
