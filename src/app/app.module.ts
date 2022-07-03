import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoPage } from './pages/todo/todo.page';
import { CompletedPage } from './pages/completed/completed.page';
import { NotFoundPage } from './pages/not-found/not-found.page';
import { TodoTaskComponent } from './components/todo-task/todo-task.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';
import { NoTaskComponent } from './components/no-task/no-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoPage,
    CompletedPage,
    NotFoundPage,
    TodoTaskComponent,
    FormComponent,
    NoTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
