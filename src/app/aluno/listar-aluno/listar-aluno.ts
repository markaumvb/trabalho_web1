import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../shared/models/aluno.model';
import { AlunoService } from '../services/aluno';
import { AlunoModule } from '../aluno-module';

@Component({
  selector: 'app-listar-aluno',
  standalone: false,
  templateUrl: './listar-aluno.html',
  styleUrl: './listar-aluno.css',
})
export class ListarAluno implements OnInit {
  alunos: Aluno[] = [];
  constructor(private alunoService: AlunoService) {}

  ngOnInit(): void {
    this.alunos = this.listarAlunos();
  }

  listarAlunos(): Aluno[] {
    return this.alunoService.getAll();
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
      this.alunoService.delete(aluno.id!);
      this.alunos = this.listarAlunos();
    }
  }
}
