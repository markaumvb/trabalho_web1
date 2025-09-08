import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Disciplina } from '../../shared/models/disciplina.model';
import { Router } from '@angular/router';
import { DisciplinaService } from '../services/disciplina';

@Component({
  selector: 'app-inserir-disciplina',
  standalone: false,
  templateUrl: './inserir-disciplina.html',
  styleUrl: './inserir-disciplina.css',
})
export class InserirDisciplina {
  @ViewChild('formDisciplina') formDisciplina!: NgForm;
  disciplina: Disciplina = new Disciplina();
  constructor(private disciplinaService: DisciplinaService, private router: Router) {}

  inserir() {
    if (this.formDisciplina.form.valid) {
      this.disciplinaService.insert(this.disciplina);
      this.router.navigate(['/disciplinas/listar']);
    }
  }
}
