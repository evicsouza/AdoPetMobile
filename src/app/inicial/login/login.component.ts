import { LoginService } from './../../service/login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UsuarioModule } from 'src/app/model/usuario/usuario.module';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  login = {
    email: '',
    password: ''
  };

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async onSubmit() {
    try {
      const result = await this.loginService.login(this.login);
      console.log(`Login efetuado: ${result}`);

      // navego para a rota vazia novamente
      this.router.navigate(['']);
    } catch (error) {
      console.error(error);
    }
  }
}
