import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacaoComponent } from './view/barra-navegacao/barra-navegacao.component';
import { PerfilUsuarioComponent } from './view/perfil-usuario/perfil-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';

import { PaginaEntradaComponent } from './view/pagina-entrada/pagina-entrada.component';
import { PaginaHoleriteComponent } from './view/pagina-holerite/pagina-holerite.component';

@NgModule({
  declarations: [	
    AppComponent,
    BarraNavegacaoComponent,
      PaginaEntradaComponent,
      PaginaHoleriteComponent,
      PerfilUsuarioComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
