import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authSvc:AuthService) { }

  ngOnInit() {
  }
  async onLogin(email,password){
    try {
      const user = await this.authSvc.login(email.value,password.value);
      if(user){
        //Todo:checkEmail
        const isVerified = this.authSvc.isEmailVerified(user);
        console.log("email verified ? ", isVerified);
      }
    } catch (error) {
      console.log('errror',error);
    }
  }

    async onLoginGoogle(){
      try {
        const user = await this.authSvc.loginGoogle();
        if(user){
          console.log("USER  -> ",user);

        }
      } catch (error) {
        console.log(error);
      }
    }
  

}
