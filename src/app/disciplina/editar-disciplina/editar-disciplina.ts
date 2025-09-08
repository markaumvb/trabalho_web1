import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Disciplina } from '../../shared/models/disciplina.model';
import { DisciplinaService } from '../services/disciplina';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-disciplina',
  standalone: false,
  templateUrl: './editar-disciplina.html',
  styleUrl: './editar-disciplina.css',
})
export class EditarDisciplina {
  @ViewChild('formDisciplina') formDisciplina!: NgForm;
  disciplina: Disciplina = new Disciplina();
  constructor(
    private disciplinaService: DisciplinaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id']; // pegar o parametro da rota
    const res = this.disciplinaService.getById(id);
    if (res !== undefined) this.disciplina = res;
    else throw new Error('disciplina não cadastrada');
  }

  atualizar(): void {
    if (this.formDisciplina.form.valid) {
      this.disciplinaService.update(this.disciplina);
      this.router.navigate(['/disciplinas']);
    }
  }
}
