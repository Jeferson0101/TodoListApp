import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Subject, takeUntil } from 'rxjs';
import { IList } from './models/list.model';
import { faAdd, faClose, faTrash, faCheck, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent  implements OnInit{

  @Input() public lists: IList[] = [];

  @Output() public onCreateList: EventEmitter<string> = new EventEmitter();
  @Output() public onRemoveList: EventEmitter<string> = new EventEmitter();
  @Output() public onCompleteList: EventEmitter<string> = new EventEmitter();

  public newListInput: FormControl;
  public showInput: boolean = false;
  public isInputValid: boolean = false;

  // Icons
  public closeIcon: IconDefinition = faClose;
  public addIcon: IconDefinition = faAdd;
  public trashIcon: IconDefinition = faTrash;
  public checkIcon: IconDefinition = faCheck;
  
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor() { }

  public ngOnInit(): void {
    this.newListInput = new FormControl('', [
      Validators.required
    ]);

    this.newListInput.statusChanges.pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((status: any) => {
        this.isInputValid = status === 'VALID' ? true : false;
      });
  }

  public showCreateInput(): void {
    this.showInput = true;
  }

  public hideCreateInput(): void {
    this.showInput = false;
  }

  public createList(): void {
    this.onCreateList.emit(this.newListInput.value);
    this.hideCreateInput();
  }

  public removeList(id: string): void {
    this.onRemoveList.emit(id);
  }

  completeList(id: string): void {
    this.onCompleteList.emit(id);
  }

}
