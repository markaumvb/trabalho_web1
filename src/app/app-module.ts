import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AlunoModule } from './aluno/aluno-module';
import { DisciplinaModule } from './disciplina/disciplina-module';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, AppRoutingModule, AlunoModule, DisciplinaModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
