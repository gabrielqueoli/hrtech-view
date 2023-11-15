import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacaoComponent } from './view/barra-navegacao/barra-navegacao.component';
import { EntradaPaginaComponent } from './view/entrada-pagina/entrada-pagina.component';

@NgModule({
  declarations: [		
    AppComponent,
    BarraNavegacaoComponent,
      EntradaPaginaComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
