import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'categorias', loadChildren: './pages/categoria/categoria.module#CategoriaModule' },
  { path: 'lancamentos', loadChildren: './pages/entries/entries.module#EntriesModule' },
  { path: 'relatorios', loadChildren: './pages/relatorio/relatorio.module#RelatorioModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
