import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {combineLatest, Observable} from 'rxjs';
import {filter, map, shareReplay, startWith} from 'rxjs/operators';
import {INITIAL_STATE} from './consts/initial-state.const';
import {Layout} from './interfaces/layout.interface';
import {StateService} from './services/state/state.service';

@Component({
  selector: 'jms-w-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  constructor(
    private state: StateService,
    private router: Router
  ) {}

  layout: Layout;
  menuOpened: boolean;
  mX = 0;
  mY = 0;
  loading$: Observable<boolean>;
  page$: Observable<{label: string; theme: string;}>;
  theme$: Observable<string>;
  logo$: Observable<string>;

  get imgStyle() {
    return `left: calc(${this.mX}px - 5rem); top: calc(${this.mY}px - 2.5rem); background: red;`
  }

  ngOnInit() {
    this.layout = INITIAL_STATE.layout;
    this.loading$ = combineLatest([this.state.routeLoading$])
      .pipe(
        map(loadings => loadings.some(Boolean))
      );

    this.page$ = this.router.events
      .pipe(
        filter(it => it instanceof NavigationEnd),
        startWith({url: location.pathname}),
        map((it: NavigationEnd) => 
          this.layout.headerLinks.find(link => link.link === it.url) || {
            label: 'Page Not Found',
            theme: 'light'
          }
        ),
        shareReplay(1)
      );
    
    this.theme$ = this.page$.pipe(
      map(page => `h-theme-${page.theme}`)
    );

    this.logo$ = this.page$.pipe(
      map(page => `/assets/images/clarity-on-${page.theme === 'dark' ? 'dark' : 'light'}.svg`)
    )
  }
}
