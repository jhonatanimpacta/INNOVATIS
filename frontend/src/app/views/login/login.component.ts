import { LoginServiceService } from './login-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario = {login: '', senha:''};

  constructor(private loginService:LoginServiceService) { }

  public login(){
   this.loginService.login(this.usuario);
  }
  ngOnInit() {
  }

}
