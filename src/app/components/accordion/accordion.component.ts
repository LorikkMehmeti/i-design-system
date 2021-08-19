import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.sass'],
})
export class AccordionComponent implements OnInit {

  @Input() items: any[] = [];
  @Input() title: string = '';
  @Input() accordionItem: any;
  constructor() { }

  ngOnInit(): void {
  }

}
