import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Aluno } from '../../shared/models/aluno.model';
import { AlunoService } from '../services/aluno';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-aluno',
  standalone: false,
  templateUrl: './editar-aluno.html',
  styleUrl: './editar-aluno.css',
})
export class EditarAluno {
  @ViewChild('formAluno') formAluno!: NgForm;
  aluno: Aluno = new Aluno();
  constructor(
    private alunoService: AlunoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id']; // pegar o parametro da rota
    const res = this.alunoService.getById(id);
    if (res !== undefined) this.aluno = res;
    else throw new Error('Aluno não cadastrado');
  }

  atualizar(): void {
    if (this.formAluno.form.valid) {
      this.alunoService.update(this.aluno);
      this.router.navigate(['/alunos']);
    }
  }
}
