import { NgModule } from "@angular/core";
import { MainPageComponent } from "./pages/main-page/main-page.component";
import { LoginComponent } from "./components/login/login.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";





@NgModule({
  imports:[
    ReactiveFormsModule,
    CommonModule
  ],
  declarations:[
    MainPageComponent,
    LoginComponent,

  ],
  exports:[
    MainPageComponent
  ]
})
export class AuthModule{

}
