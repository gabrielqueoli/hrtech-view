import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent {

  perfilForm: FormGroup;

  tabActive = 'beneficios';

  constructor(private fb: FormBuilder) {
    this.perfilForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required]
    })
   }

  setTabActive(tab: string) {
    this.tabActive = tab;
  }

  
}
