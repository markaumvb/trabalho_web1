import { Injectable } from '@angular/core';
import { Aluno } from '../../shared/models/aluno.model';

const LS_CHAVE = 'alunos';
@Injectable({
  providedIn: 'root',
})
export class AlunoService {
  constructor() {}
  getAll(): Aluno[] {
    const alunos = localStorage[LS_CHAVE]; //buscar no array no localStorage
    return alunos ? JSON.parse(alunos) : []; //se existir, converte a string para objeto, se não, retorna um array vazio
  }

  insert(aluno: Aluno): void {
    const alunos = this.getAll();
    aluno.id = new Date().getTime(); //gera um ID único baseado na datahora atual
    alunos.push(aluno); //adiciona o novo aluno no array
    localStorage[LS_CHAVE] = JSON.stringify(alunos); //converte o array para string e salva no localStorage
  }

  getById(id: number): Aluno | undefined {
    const alunos: Aluno[] = this.getAll();
    return alunos.find((aluno) => aluno.id === id); // buscar o aluno com o ID igual ao que foi encontrado
  }

  update(aluno: Aluno): void {
    const alunos = this.getAll(); //trazer todos os alunos
    alunos.forEach((obj, index, objs) => {
      // percorrer o array que foi trazido acima
      if (aluno.id === obj.id) {
        // comparar o ID do aluno que foi passado com o ID do aluno que está sendo percorrido
        objs[index] = aluno; // se for igual, substituir o aluno do array pelo aluno que foi passado
      }
    });
    localStorage[LS_CHAVE] = JSON.stringify(alunos);
  }

  delete(id: number): void {
    let alunos: Aluno[] = this.getAll();
    alunos = alunos.filter((aluno) => aluno.id !== id); // buscar o aluno com o ID igual ao que foi encontrado
    localStorage[LS_CHAVE] = JSON.stringify(alunos); // reescrever o array no localStorage
  }
}
