import { Component, OnInit } from '@angular/core';

declare var window: any;

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.scss']
})
export class TodoCreateComponent implements OnInit {
  public formModal: any;
  
  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModal')
    );
  }

  public openModal(): void {
    this.formModal.show();
  }

}
