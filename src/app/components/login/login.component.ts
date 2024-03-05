import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formData = {
    email: '',
    password: ''
  };
  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.login(this.formData)
      .subscribe(
        response => {
          // Manejar la respuesta del servidor
          console.log('Respuesta del servidor:', response);
          // Por ejemplo, podrías redirigir al usuario a otra página si el inicio de sesión es exitoso
        },
        error => {
          // Manejar errores
          alert('Error')
        }
      );
  }
}
