import { Component, Input, OnInit } from '@angular/core';
import { TagPriority } from './models/tag.model';

@Component({
  selector: 'tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  @Input() public tagPriority: TagPriority = TagPriority.LowPriority;

  constructor() { }

  ngOnInit(): void {
  }

}
