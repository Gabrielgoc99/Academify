import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarAlunoComponent } from './components/Listar-Aluno/listar-aluno.component';
import { AlunoTableComponent } from './components/Aluno-Table/aluno-table.component';
import { AdicionarAlunoComponent } from './components/Adicionar-Aluno/adicionar-aluno.component';
import { PrincipalComponent } from './components/Principal/principal.component';


const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'Principal', component: PrincipalComponent },
  { path: 'Listar-Aluno', component: ListarAlunoComponent },
  { path: 'aluno/:id', component: AlunoTableComponent },
  { path: 'Adicionar-Aluno', component: AdicionarAlunoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
