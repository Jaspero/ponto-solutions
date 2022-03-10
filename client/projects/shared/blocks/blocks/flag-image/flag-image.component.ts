import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Block} from '@jaspero/fb-page-builder';
import {COMMON_OPTIONS} from '../common-options.const';
import {CommonBlockComponent, CommonOptions} from '../common.block';
import {IMAGE_DEFINITION} from '../utils';

interface Options extends CommonOptions {
  title?: string;
  description?: string;
  link?: string;
  linkLabel?: string;
  image?: string;
  backgroundPosition?: string;
  backgroundPositionMobile?: string;
}

@Block({
  label: 'Flag Image',
  icon: 'filter',
  previewValue: {
    title: 'Industry Experts',
    description: 'An expert team of system engineers and programming prowess. An expert team of system engineers and programming prowess.',
    link: '/',
    linkLabel: 'Find out more',
    image: '/assets/images/pb-placeholders/1200x800.png',
    ...COMMON_OPTIONS.default
  },
  form: {
    segments: [
      {
        title: 'Content',
        icon: 'article',
        fields: [
          '/title',
          '/description',
          '/link',
          '/linkLabel',
        ]
      },
      {
        title: 'Background',
        fields: [
          '/image',
          '/backgroundPosition',
          '/backgroundPositionMobile'
        ]
      },
      ...COMMON_OPTIONS.segment
    ],
    schema: {
      properties: {
        title: {type: 'string'},
        description: {type: 'string'},
        link: {type: 'string'},
        linkLabel: {type: 'string'},
        image: {type: 'string'},
        backgroundPosition: {type: 'string'},
        backgroundPositionMobile: {type: 'string'},
        ...COMMON_OPTIONS.properties
      }
    },
    definitions: {
      title: {label: 'Title'},
      description: {
        label: 'Description',
        component: {
          type: 'textarea',
          configuration: {
            rows: 5
          }
        }
      },
      link: {label: 'Link'},
      linkLabel: {label: 'Link Label'},
      image: {label: 'Image', ...IMAGE_DEFINITION},
      ...COMMON_OPTIONS.definitions
    }
  }
})
@Component({
  selector: 'jms-flag-image',
  templateUrl: './flag-image.component.html',
  styleUrls: ['./flag-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlagImageComponent extends CommonBlockComponent<Options> implements OnInit {

  backgroundPosition: string;

  ngOnInit() {
    this.backgroundPosition = (window.innerWidth > 800 ? this.data.backgroundPosition : this.data.backgroundPositionMobile) || '50% 50%'
  }
}
