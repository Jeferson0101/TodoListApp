import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { IList } from 'src/app/components/list/models/list.model';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public lists: IList[] = [];

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private todoListService: TodoListService) {}

  public ngOnInit(): void {
    this.getAllLists();
  }

  public createList(title: string): void {
    this.todoListService.addNewTodoList({title})
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((response: any) => {
        this.lists.push(response);
      });
  }

  public removeList(id: string): void {
    this.todoListService.removeList(id)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((removed: boolean) => {
      if (removed) {
        this.removeItemFromList(id);
      }
    });
  }

  public completeList(id: string): void {
    this.todoListService.removeList(id)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((removed: boolean) => {
      if (removed) {
        this.removeItemFromList(id);
      }
    });
  }

  public getAllLists(): void {
    this.todoListService.getAllLists()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((response: IList[]) => {
        console.log(response);
        this.lists = response;
      });
  }

  public removeItemFromList(id: string): void {
    this.lists = this.lists.filter((list: IList) => list.id !== id);
  }
}
