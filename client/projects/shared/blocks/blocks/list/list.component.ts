import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Block} from '@jaspero/fb-page-builder';
import {COMMON_OPTIONS} from '../common-options.const';
import {CommonBlockComponent, CommonOptions} from '../common.block';

interface Options extends CommonOptions {
  list?: Array<{
    label?: string;
    link?: string;
  }>;
}

@Block({
  label: 'List',
  icon: 'view_sidebar',
  previewValue: {
    list: [{
      label: 'Home',
      link: '/'
    }]
  },
  form: {
    segments: [
      {
        title: (index: number) => index === undefined ? 'List' : `List ${index + 1}`,
        array: '/list',
        fields: ['/label', '/link'],
      },
      ...COMMON_OPTIONS.segment
    ],
    schema: {
      properties: {
        list: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              label: {type: 'string'},
              link: {type: 'string'}
            }
          }
        },
        ...COMMON_OPTIONS.properties
      }
    },
    definitions: {
      'list/label': {label: 'Label'},
      'list/link': {label: 'Link'},
      ...COMMON_OPTIONS.definitions
    }
  }
})
@Component({
  selector: 'jms-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent extends CommonBlockComponent<Options> {}