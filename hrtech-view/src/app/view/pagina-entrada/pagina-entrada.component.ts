import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-entrada',
  templateUrl: './pagina-entrada.component.html',
  styleUrls: ['./pagina-entrada.component.css']
})
export class PaginaEntradaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const loginForm = document.querySelector('.login') as HTMLFormElement;
    const cadastroForm = document.getElementById('cadastroForm') as HTMLDivElement;
    const popup = document.getElementById('popup') as HTMLDivElement;

    document.addEventListener('DOMContentLoaded', function () {
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
        passwordField.style.color = '#000000';
      });

      passwordField.addEventListener('input', function () {
        if (passwordField.value === '') {
          passwordLabel.style.top = '0';
          passwordLabel.style.left = '0';
          passwordLabel.style.color = '#000000';
          passwordLabel.style.fontSize = '16px';
          passwordField.style.color = '#000000';
        } else {
          passwordLabel.style.top = '-20px';
          passwordLabel.style.left = '0';
          passwordLabel.style.color = '#000000';
          passwordLabel.style.fontSize = '12px';
          passwordField.style.color = '#000000';
        }
      });

      passwordField.addEventListener('blur', function () {
        if (passwordField.value === '') {
          passwordLabel.style.top = '0';
          passwordLabel.style.left = '0';
          passwordLabel.style.color = '#000000';
          passwordLabel.style.fontSize = '16px';
          passwordField.style.color = '#000000';
        }
      });
    });
    
    const fecharPopup = () => {
      popup.style.display = 'none';
    };

    const mostrarPopup = () => {
      popup.style.display = 'block';
      setTimeout(fecharPopup, 3000);
    };

    const cadastroLink = document.getElementById('cadastroLink') as HTMLAnchorElement;
    cadastroLink.addEventListener('click', function (event) {
      event.preventDefault();
      resetarCampos();
      loginForm.style.display = 'none';
      cadastroForm.style.display = 'block';
    });

    function resetarCampos() {
      const nome = document.getElementById('cadastroNome') as HTMLInputElement;
      const cpfCnpj = document.getElementById('cadastroCpfCnpj') as HTMLInputElement;
      const email = document.getElementById('cadastroEmail') as HTMLInputElement;
      const contato = document.getElementById('cadastroContato') as HTMLInputElement;
      const senha = document.getElementById('cadastroSenha') as HTMLInputElement;

      nome.value = '';
      cpfCnpj.value = '';
      email.value = '';
      contato.value = '';
      senha.value = '';
    }

    function validarCadastro() {
      const nome = document.getElementById('cadastroNome') as HTMLInputElement;
      const cpfCnpj = document.getElementById('cadastroCpfCnpj') as HTMLInputElement;
      const email = document.getElementById('cadastroEmail') as HTMLInputElement;
      const contato = document.getElementById('cadastroContato') as HTMLInputElement;
      const senha = document.getElementById('cadastroSenha') as HTMLInputElement;

      if (!nome.value || !cpfCnpj.value || !email.value || !contato.value || !senha.value) {
        alert('Por favor, preencha todos os campos.');
        return;
      }

      mostrarPopup();

      loginForm.style.display = 'block';
      cadastroForm.style.display = 'none';
    }

    const btnCadastrar = document.querySelector('.btn-cadastrar') as HTMLAnchorElement;
    btnCadastrar.addEventListener('click', function (event) {
      event.preventDefault();
      validarCadastro();
    });
  }
}
