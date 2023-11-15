import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrada-pagina',
  templateUrl: './entrada-pagina.component.html',
  styleUrls: ['./entrada-pagina.component.css']
})
export class EntradaPaginaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

document.addEventListener('DOMContentLoaded', () => {
  const passwordField = document.getElementById('passwordField') as HTMLInputElement;
  const togglePassword = document.getElementById('togglePassword') as HTMLButtonElement;
  const eyeIcon = document.getElementById('eyeIcon') as HTMLImageElement;
  const passwordLabel = document.getElementById('passwordLabel') as HTMLLabelElement;

  togglePassword.addEventListener('click', () => {
      if (passwordField.type === 'password') {
          passwordField.type = 'text';
          eyeIcon.src = 'https://cdn-icons-png.flaticon.com/128/2767/2767146.png';
      } else {
          passwordField.type = 'password';
          eyeIcon.src = 'https://cdn-icons-png.flaticon.com/128/709/709612.png';
      }
  });

  passwordField.addEventListener('focus', () => {
      passwordLabel.style.top = '-20px';
      passwordLabel.style.left = '0';
      passwordLabel.style.color = '#000000';
      passwordLabel.style.fontSize = '12px';
  });

  passwordField.addEventListener('blur', () => {
      if (passwordField.value === '') {
          passwordLabel.style.top = '0';
          passwordLabel.style.left = '0';
          passwordLabel.style.color = '#fff';
          passwordLabel.style.fontSize = '16px';
      }
  });
});
