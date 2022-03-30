import { AuthGuardService } from './../../services/auth-guard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: any;
  pass: any;
  constructor(private auth: AuthGuardService){  }

  ngOnInit() {
  }
  login(){
    if(this.user === 'taz' && this.pass === 123){
        this.auth.autentication(true);
    }else{
      this.auth.autentication(false);
      alert('User e pass errados');
    }
  }
}
