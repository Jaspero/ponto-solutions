import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Block} from '@jaspero/fb-page-builder';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {filter} from 'rxjs';
import {COMMON_OPTIONS} from '../common-options.const';
import {CommonBlockComponent, CommonOptions} from '../common.block';

interface Options extends CommonOptions {
  title?: string;
  message?: string;
  contacts?: Array<{
    label?: string;
    url?: string;
    text?: string;
  }>;
  links?: Array<{
    link?: string;
    label?: string;
  }>;
  socials: Array<{
    icon?: string;
    link?: string;
  }>;
}

@Block({
  label: 'Footer',
  icon: 'bubble_chart',
  module: ['settings'],
  previewValue: {
    title: `Let's talk Security`,
    message: `Clarity Security Systems Unification Specialists are an elite firm of security system specialists. We design, engineer, install and program access control, video surveillance, intrusion detection and network and wireless systems for enterprise, commercial and residential clients.`,
    contacts: [
      {
        label: 'Call us:',
        url: 'tel:3143483365',
        text: '(314)348-3365'
      },
      {
        label: 'Sales:',
        url: 'tel:3143483365',
        text: '(314)348-3365'
      },
      {
        label: 'Support Portal:',
        url: '/',
        text: 'Click Here'
      }
    ],
    links: [],
    socials: [],
    ...COMMON_OPTIONS.default
  },
  form: {
    segments: [
      {
        title: 'Content',
        icon: 'article',
        fields: [
          '/title',
          '/message'
        ]
      },
      {
        title: (index: number) => index === undefined ? 'Contact' : `Contact ${index + 1}`,
        array: '/contacts',
        fields: ['/label', '/url', '/text'],
      },
      {
        title: (index: number) => index === undefined ? 'Link' : `Link ${index + 1}`,
        array: '/links',
        fields: ['/label', '/link'],
      },
      {
        title: (index: number) => index === undefined ? 'Social' : `Social ${index + 1}`,
        array: '/socials',
        fields: ['/link', '/icon'],
      },
      ...COMMON_OPTIONS.segment
    ],
    schema: {
      properties: {
        title: {type: 'string'},
        message: {type: 'string'},
        contacts: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              label: {type: 'string'},
              url: {type: 'string'},
              text: {type: 'string'},
            }
          }
        },
        links: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              link: {type: 'string'},
              label: {type: 'string'}
            }
          }
        },
        socials: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              link: {type: 'string'},
              icon: {type: 'string'}
            }
          }
        },
        ...COMMON_OPTIONS.properties
      }
    },
    definitions: {
      title: {label: 'Title'},
      message: {
        label: 'Message',
        component: {
          type: 'textarea',
          configuration: {
            rows: 5
          }
        }
      },
      'contacts/label': {label: 'Label'},
      'contacts/url': {label: 'URL'},
      'contacts/text': {label: 'Text'},
      'links/label': {label: 'Label'},
      'links/link': {label: 'Link'},
      'socials/link': {label: 'Link'},
      'socials/icon': {
        label: 'Icon (SVG)',
        component: {
          type: 'textarea',
          configuration: {
            rows: 5
          }
        }
      },
      ...COMMON_OPTIONS.definitions
    }
  }
})
@UntilDestroy()
@Component({
  selector: 'jms-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent extends CommonBlockComponent<Options> implements OnInit {
  constructor(
    public cdr: ChangeDetectorRef,
    public el: ElementRef,
    private router: Router
  ) {
    super(cdr, el);
  }

  @HostBinding('class.light')
  light: boolean;

  ngOnInit() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        untilDestroyed(this)
      )
      .subscribe(() => {
        this.light = document.querySelector('main').classList.contains('light');
        this.cdr.markForCheck();
      })

    this.light = document.querySelector('main').classList.contains('light');
  }
}
