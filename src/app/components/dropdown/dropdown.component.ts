import { Component } from '@angular/core';

import { faEllipsis, IconDefinition } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {

  public ellipsesIcon: IconDefinition = faEllipsis;

}
