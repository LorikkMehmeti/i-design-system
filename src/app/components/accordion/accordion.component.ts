import { Component, Input, OnInit } from '@angular/core';
import { ICONS } from 'src/app/shared/utilities/constants';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.sass'],
})
export class AccordionComponent implements OnInit {

  @Input() items: any[] = [];
  @Input() title: string = '';
  @Input() accordionItem: any;
  @Input() index: number = 0;
  @Input() expandedIcon: string = `/assets/icons/${ICONS.CHEVRON_DOWN.path}`;
  @Input() collapsedIcon: string = `/assets/icons/${ICONS.CHEVRON_UP.path}`;

  constructor() { }

  ngOnInit(): void {
  }

}
