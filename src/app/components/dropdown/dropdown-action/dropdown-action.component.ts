import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dropdown-action',
  templateUrl: './dropdown-action.component.html',
  styleUrls: ['./dropdown-action.component.scss']
})
export class DropdownActionComponent implements OnInit {

  @Output() public onActionClick: EventEmitter<void> = new EventEmitter();

  @Input() public displayText: string;
  @Input() public icon: IconDefinition;

  constructor() { }

  ngOnInit(): void {
  }

  public actionClick(): void {
    this.onActionClick.emit();
  }

}
