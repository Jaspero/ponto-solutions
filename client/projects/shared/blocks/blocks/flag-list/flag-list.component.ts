import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Block} from '@jaspero/fb-page-builder';
import {COMMON_OPTIONS} from '../common-options.const';
import {CommonBlockComponent, CommonOptions} from '../common.block';

interface Options extends CommonOptions {
  title?: string;
  description?: string;
  link?: string;
  linkLabel?: string;
  list?: string[]; 
}

@Block({
  label: 'Flag List',
  icon: 'view_sidebar',
  previewValue: {
    title: 'Our Specialties',
    description: 'An expert team of system engineers and programming prowess. An expert team of system engineers and programming prowess.',
    link: '/',
    linkLabel: 'Find out more',
    list: ['Entertainment', 'Cannabis', 'Sports Venues', 'Corporate', 'Education']
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
          '/list',
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
        list: {type: 'array'},
        ...COMMON_OPTIONS.properties
      }
    },
    definitions: {
      title: {label: 'Title'},
      description: {
        label: 'Description',
        component: {
          type: 'textarea',
          configuration: {rows: 5}
        }
      },
      link: {label: 'Link'},
      linkLabel: {label: 'Link Label'},
      list: {label: 'List'},
      ...COMMON_OPTIONS.definitions
    }
  }
})
@Component({
  selector: 'jms-flag-list',
  templateUrl: './flag-list.component.html',
  styleUrls: ['./flag-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlagListComponent extends CommonBlockComponent<Options> {}