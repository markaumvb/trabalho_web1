import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarAluno } from './aluno/listar-aluno/listar-aluno';
import { InserirAluno } from './aluno/inserir-aluno/inserir-aluno';
import { EditarAluno } from './aluno/editar-aluno/editar-aluno';
import { ListarDisciplina } from './disciplina/listar-disciplina/listar-disciplina';
import { InserirDisciplina } from './disciplina/inserir-disciplina/inserir-disciplina';
import { EditarDisciplina } from './disciplina/editar-disciplina/editar-disciplina';

const routes: Routes = [
  { path: 'alunos', redirectTo: 'alunos/listar' },
  { path: 'alunos/listar', component: ListarAluno },
  { path: 'alunos/novo', component: InserirAluno },
  { path: 'alunos/novo/:id', component: EditarAluno },

  { path: 'disciplinas', redirectTo: 'disciplinas/listar' },
  { path: 'disciplinas/listar', component: ListarDisciplina },
  { path: 'disciplinas/novo', component: InserirDisciplina },
  { path: 'disciplinas/novo/:id', component: EditarDisciplina },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
