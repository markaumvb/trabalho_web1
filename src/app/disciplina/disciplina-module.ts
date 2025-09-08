import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisciplinaService } from './services/disciplina';

import { EditarDisciplina } from './editar-disciplina/editar-disciplina';
import { InserirDisciplina } from './inserir-disciplina/inserir-disciplina';
import { ListarDisciplina } from './listar-disciplina/listar-disciplina';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditarDisciplina, InserirDisciplina, ListarDisciplina],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [DisciplinaService],
})
export class DisciplinaModule {}
