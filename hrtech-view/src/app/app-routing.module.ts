import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { PaginaEntradaComponent } from './view/pagina-entrada/pagina-entrada.component';
import { BarraNavegacaoComponent } from './view/barra-navegacao/barra-navegacao.component';
import { PaginaHoleriteComponent } from './view/pagina-holerite/pagina-holerite.component';
import { PerfilUsuarioComponent } from './view/perfil-usuario/perfil-usuario.component';

const routes: Routes = [
  { path: 'paginaentrada', component: PaginaEntradaComponent },
  {path: 'barranavegacao', component: BarraNavegacaoComponent},
  {path: 'holerite', component: PaginaHoleriteComponent},
  {path: 'perfilusuario', component: PerfilUsuarioComponent}
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
