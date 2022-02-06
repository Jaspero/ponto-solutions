import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Block} from '@jaspero/fb-page-builder';
import {COMMON_OPTIONS} from '../common-options.const';
import {CommonBlockComponent, CommonOptions} from '../common.block';
import {IMAGE_DEFINITION} from '../utils';

interface Options extends CommonOptions {
  title?: string;
  image?: string;
  theme?: string;
}

@Block({
  label: 'Hero Title',
  icon: 'title',
  previewValue: {
    title: 'Simplify Your Systems',
    image: '/assets/images/pb-placeholders/1200x800.png',
    theme: 'theme-accent',
    ...COMMON_OPTIONS.default
  },
  form: {
    segments: [
      {
        title: 'Content',
        icon: 'article',
        fields: [
          '/title',
          '/image',
          '/theme'
        ]
      },
      ...COMMON_OPTIONS.segment
    ],
    schema: {
      properties: {
        title: {type: 'string'},
        image: {type: 'string'},
        theme: {type: 'string'},
        ...COMMON_OPTIONS.properties
      }
    },
    definitions: {
      title: {label: 'Title'},
      image: {label: 'Image', ...IMAGE_DEFINITION},
      theme: {
        label: 'Theme',
        component: {
          type: 'select',
          configuration: {
            dataSet: [
              {name: 'Light', value: 'theme-light'},
              {name: 'Dark', value: 'theme-dark'},
              {name: 'Accent', value: 'theme-accent'},
            ]
          }
        }
      },
      ...COMMON_OPTIONS.definitions
    }
  }
})
@Component({
  selector: 'jms-hero-title',
  templateUrl: './hero-title.component.html',
  styleUrls: ['./hero-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroTitleComponent extends CommonBlockComponent<Options> {}
