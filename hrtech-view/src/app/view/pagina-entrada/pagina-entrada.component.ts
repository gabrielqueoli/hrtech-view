import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-entrada',
  templateUrl: './pagina-entrada.component.html',
  styleUrls: ['./pagina-entrada.component.css']
})
export class PaginaEntradaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

document.addEventListener('DOMContentLoaded', function() {
  const passwordField = document.getElementById('passwordField') as HTMLInputElement;
  const togglePassword = document.getElementById('togglePassword') as HTMLButtonElement;
  const eyeIcon = document.getElementById('eyeIcon') as HTMLImageElement;
  const passwordLabel = document.getElementById('passwordLabel') as HTMLLabelElement;

  togglePassword.addEventListener('click', function () {
      if (passwordField.type === 'password') {
          passwordField.type = 'text';
          eyeIcon.src = 'https://cdn-icons-png.flaticon.com/128/2767/2767146.png';
      } else {
          passwordField.type = 'password';
          eyeIcon.src = 'https://cdn-icons-png.flaticon.com/128/709/709612.png';
      }
  });

  passwordField.addEventListener('focus', function () {
      passwordLabel.style.top = '-20px';
      passwordLabel.style.left = '0';
      passwordLabel.style.color = '#000000';
      passwordLabel.style.fontSize = '12px';
  });

  passwordField.addEventListener('blur', function () {
      if (passwordField.value === '') {
          passwordLabel.style.top = '0';
          passwordLabel.style.left = '0';
          passwordLabel.style.color = '#fff';
          passwordLabel.style.fontSize = '16px';
      }
  });
});

