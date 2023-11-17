import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { PaginaEntradaComponent } from './view/pagina-entrada/pagina-entrada.component';
import { BarraNavegacaoComponent } from './view/barra-navegacao/barra-navegacao.component';

const routes: Routes = [
  { path: 'paginaentrada', component: PaginaEntradaComponent },
  {path: 'barranavegacao', component: BarraNavegacaoComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
