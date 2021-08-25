import {
  Component,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'i-design-system';

  iconTemplate: boolean = false;

  animes: any = [{
      name: 'Jujutsu Kaisen',
      description: `Jujutsu Kaisen (呪術廻戦) is a Japanese manga series written and illustrated by Gege Akutami, serialized in Shueisha's Weekly Shōnen Jump since March 2018.`
    },
    {
      name: 'Tokyo Revengers',
      description: `Tokyo Revengers: the anime where 26-year-olds look like overgrown kids and kids look like they must have hit puberty right out the womb.`
    },
    {
      name: 'Attack On Titan',
      description: `The plot of Attack on Titan centers on a civilization inside three walls, the last location where humans still live. Over one hundred years ago, humanity was ...`
    },
    {
      name: 'Code Geass',
      description: `Code Geass: Lelouch of the Rebellion often referred to simply as Code Geass, is a Japanese anime television series produced by Sunrise.`
    },

  ];

  breadcrumb = [{
    "name": "Home",
    "routerLink": "home"
  }, {
    "name": "Top Animes Of All Time",
    "routerLink": "top-animes"
  }, {
    "name": "Attack On Titan",
    "routerLink": "attack-on-titan"
  }, {
    "name": "Attack On Titan - Season 3",
    "routerLink": "attack-on-titan-season-3"
  }, {
    "name": "Episodes",
    "routerLink": "episodes"
  }, {
    "name": "Episode List",
    "routerLink": "episode-list"
  }, {
    "name": "Episode 12: Night of the Battle to Retake the Wall",
    "routerLink": "night-27348293"
  }, {
    "name": "LEVI ACKERMAN",
    "routerLink": "levi-ackerman"
  }];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.animes.forEach((anime: any) => {
      anime.uuid = this.uuidv4();
    });
  }

  uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
