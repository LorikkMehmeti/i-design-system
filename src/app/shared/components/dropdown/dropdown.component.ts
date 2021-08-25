import { Component, EventEmitter, Output, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'i-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.sass']
})
export class DropdownComponent {

  @ViewChild(TemplateRef) templateRef: TemplateRef<any>;
  @Output() closed = new EventEmitter<void>();

  constructor() {}

}
