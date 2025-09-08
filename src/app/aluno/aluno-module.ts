import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoService } from './services/aluno';

import { InserirAluno } from './inserir-aluno/inserir-aluno';
import { EditarAluno } from './editar-aluno/editar-aluno';
import { ListarAluno } from './listar-aluno/listar-aluno';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [InserirAluno, EditarAluno, ListarAluno],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [AlunoService],
})
export class AlunoModule {}
