import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
// import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import * as $ from "jquery";

//component & module necessaires 
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

//components necessaires
import { LoginComponent } from "./auth/login/login.component";
import { InscriptionComponent } from "./auth/inscription/inscription.component";


//modals
import { CplatComponent } from "./modals/CrudPlat/CPlat/cplat.component";
import { InventaireCComponent } from './modals/CrudIventaire/Inventaire/InventaireC.component';

//assets
import { MatangModule } from "../assets/matang.module";


//environment
import { environment } from "../environments/environment";



//flex
import { FlexLayoutModule } from "@angular/flex-layout";

//calendar
import { CalendarModule, DateAdapter } from "angular-calendar";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";
import { NgbModule, NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { FlatpickrModule } from "angularx-flatpickr";


//firebase
import { AngularFireModule } from "@angular/fire";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CCmdComponent } from './modals/CrudCCmd/CCmd/ccmd.component';
import { CBoissonComponent } from './modals/CrudBoisson/CBoisson/cboisson.component';
import { CPersonnelComponent } from './modals/CrudPersonnel/cpersonnel/cpersonnel.component';
import { CPortionComponent } from './modals/CrudPortion/cportion/cportion.component';
import { CropperComponent } from './auth/cropper/cropper.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { InventaireBComponent } from './modals/CrudInventaireB/inventaire-b/inventaire-b.component';


import {MatTabsModule} from '@angular/material/tabs';
import { FamillePipe } from './pipes/famille.pipe';
import { SfamillePipe } from './pipes/sfamille.pipe';
import { LoginModule } from './auth/login/login.module';
import { InscriptionModule } from './auth/inscription/inscription.module';
import { LoginService } from './auth/login/login.service';
import { ProfileService } from './auth/inscription/inscription.service';



@NgModule({
  declarations: [

    //component initial
    AppComponent,

    //components necessaires
    LoginComponent,
    InscriptionComponent,
    
   
    //modals
    InventaireCComponent ,
    CplatComponent,
    CCmdComponent,
    CBoissonComponent,
    CPersonnelComponent,
    CPortionComponent,
    CropperComponent,
    InventaireBComponent,
    InventaireBComponent,

//pipes
    SfamillePipe,
    FamillePipe,

    
  ],
  exports:[
    FamillePipe,
    SfamillePipe,

  ],
  imports: [
     
    ImageCropperModule,
    //important
    CommonModule,
    BrowserModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    //angular-material
    MatangModule,
    MatTabsModule,
    //flex
    FlexLayoutModule,

    //calendar
    FlatpickrModule,
    FlatpickrModule.forRoot(),
    NgbModalModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),

    //firebase
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
   
  ],

  
  entryComponents: [

    //entry components (modals)
    CplatComponent,
    CCmdComponent,
    InventaireCComponent,
    CBoissonComponent,
    CPersonnelComponent,
    CPortionComponent,
    InventaireBComponent,
    CropperComponent,
  ],
  providers: [LoginService,ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule {}
