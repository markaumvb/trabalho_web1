import { Component, ViewChild } from '@angular/core';
import { Aluno } from '../../shared/models/aluno.model';
import { NgForm } from '@angular/forms';
import { AlunoService } from '../services/aluno';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserir-aluno',
  standalone: false,
  templateUrl: './inserir-aluno.html',
  styleUrl: './inserir-aluno.css',
})
export class InserirAluno {
  @ViewChild('formAluno') formAluno!: NgForm;
  aluno: Aluno = new Aluno();
  constructor(private alunoService: AlunoService, private router: Router) {}

  inserir() {
    if (this.formAluno.form.valid) {
      this.alunoService.insert(this.aluno);
      this.router.navigate(['/alunos/listar']);
    }
  }
}
