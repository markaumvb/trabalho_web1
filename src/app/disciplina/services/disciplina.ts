import { Injectable } from '@angular/core';
import { Disciplina } from '../../shared/models/disciplina.model';

const LS_CHAVE = 'disciplinas';
@Injectable({
  providedIn: 'root',
})
export class DisciplinaService {
  constructor() {}
  getAll(): Disciplina[] {
    const disciplinas = localStorage[LS_CHAVE]; //buscar no array no localStorage
    return disciplinas ? JSON.parse(disciplinas) : []; //se existir, converte a string para objeto, se não, retorna um array vazio
  }

  insert(disciplina: Disciplina): void {
    const disciplinas = this.getAll();
    disciplina.id = new Date().getTime(); //gera um ID único baseado na datahora atual
    disciplinas.push(disciplina); //adiciona o novo disciplina no array
    localStorage[LS_CHAVE] = JSON.stringify(disciplinas); //converte o array para string e salva no localStorage
  }

  getById(id: number): Disciplina | undefined {
    const disciplinas: Disciplina[] = this.getAll();
    return disciplinas.find((disciplina) => disciplina.id === id); // buscar o disciplina com o ID igual ao que foi encontrado
  }

  update(disciplina: Disciplina): void {
    const disciplinas = this.getAll(); //trazer todos os disciplinas
    disciplinas.forEach((obj, index, objs) => {
      // percorrer o array que foi trazido acima
      if (disciplina.id === obj.id) {
        // comparar o ID do disciplina que foi passado com o ID do disciplina que está sendo percorrido
        objs[index] = disciplina; // se for igual, substituir o disciplina do array pelo disciplina que foi passado
      }
    });
    localStorage[LS_CHAVE] = JSON.stringify(disciplinas);
  }

  delete(id: number): void {
    let disciplinas: Disciplina[] = this.getAll();
    disciplinas = disciplinas.filter((disciplina) => disciplina.id !== id); // buscar o disciplina com o ID igual ao que foi encontrado
    localStorage[LS_CHAVE] = JSON.stringify(disciplinas); // reescrever o array no localStorage
  }
}
