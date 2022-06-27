import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './features/todo-list/todo-list.component';
import { TagComponent } from './components/tag/tag.component';
import { TodoCreateComponent } from './features/todo-create-list/todo-create.component';
import { ListComponent } from './components/list/list.component';
import { TodoListService } from './services/todo-list.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { DropdownActionComponent } from './components/dropdown/dropdown-action/dropdown-action.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TagComponent,
    TodoCreateComponent,
    ListComponent,
    DropdownComponent,
    DropdownActionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [
    TodoListService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
