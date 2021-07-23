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

  cadastroForm: FormGroup;
  usuario: UsuarioModule;
  user: UsuarioModule = {
    $id: '',
    $nome: ' ',
    email: '',
    senha: ''
  };

  constructor(private route: Router, private rotaAtiva: ActivatedRoute, private authService: AuthService) {
   // this.user = this.rotaAtiva.snapshot.params['user'];
  }
  ngOnInit() {}

  signInWithGoogle() {
    this.authService.signInWithGoogle()
      .then(() => {
        this.route.navigate(['/feed/listar-animais']);
      })
      .catch((err) => console.log(err));
  }
}
