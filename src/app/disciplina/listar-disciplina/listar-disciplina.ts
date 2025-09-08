import { Component } from '@angular/core';
import { Disciplina } from '../../shared/models/disciplina.model';
import { DisciplinaService } from '../services/disciplina';
import { Aluno } from '../../shared/models/aluno.model';

@Component({
  selector: 'app-listar-disciplina',
  standalone: false,
  templateUrl: './listar-disciplina.html',
  styleUrl: './listar-disciplina.css',
})
export class ListarDisciplina {
  disciplinas: Disciplina[] = [];
  constructor(private disciplinaService: DisciplinaService) {}

  ngOnInit(): void {
    this.disciplinas = this.listarDisciplinas();
  }

  listarDisciplinas(): Disciplina[] {
    return this.disciplinaService.getAll();
    //mockup
    /*   return [
      { id: 1, nome: 'João Silva', cpf: 123, email: 'teste@123.com.br', curso: 'Engenharia' },
      { id: 2, nome: 'Maria Souza', cpf: 456, curso: 'Medicina' },
      { id: 3, nome: 'Pedro Santos', cpf: 789, curso: 'Direito' },
    ]; */
  }

  remover($event: any, aluno: Aluno): void {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover a aluno ${aluno.nome}?`)) {
      this.disciplinaService.delete(aluno.id!);
      this.disciplinas = this.listarDisciplinas();
    }
  }
}
