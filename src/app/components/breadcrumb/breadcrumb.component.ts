import {
  Component,
  OnDestroy,
  OnInit,
  Input,
  TemplateRef
} from '@angular/core';
import {
  Subject
} from 'rxjs';
import {
  takeUntil
} from 'rxjs/operators';
import {
  BreakpointObserver,
  Breakpoints
} from '@angular/cdk/layout';
import {
  ICONS
} from 'src/app/shared/utilities/constants';

export interface BreadCrumbItem {
  name: string;
  routerLink: string | string[];
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.sass']
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
  destroyed = new Subject < void > ();
  currentScreenSize: string;
  @Input() marker: string = '/';
  @Input() useTemplate: boolean = false;
  @Input() body: TemplateRef < any > ;

  @Input() breadcrumb: BreadCrumbItem[] = [];

  ICON_CHEVRON: string = `/assets/icons/${ICONS.CHEVRONS.right.path}`;

  MORE_ICON: string = `/assets/icons/${ICONS.MORE.path}`;
  SLICE_NUMBER: number = 4;

  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  SLICE_NUMBER_MAP = new Map([
    [Breakpoints.XSmall, 8],
    [Breakpoints.Small, 7],
    [Breakpoints.Medium, 6],
    [Breakpoints.Large, 3],
    [Breakpoints.XLarge, 3],
  ]);

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).pipe(takeUntil(this.destroyed)).subscribe(result => {
      for (const query of Object.keys(result.breakpoints)) {
        if (result.breakpoints[query]) {
          this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
          this.SLICE_NUMBER = this.SLICE_NUMBER_MAP.get(query) ?? 4;
        }
      }
    });
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

}
