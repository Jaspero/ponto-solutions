import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Block} from '@jaspero/fb-page-builder';
import {COMMON_OPTIONS} from '../common-options.const';
import {CommonBlockComponent, CommonOptions} from '../common.block';
import {IMAGE_DEFINITION} from '../utils';

interface Options extends CommonOptions {
  list?: Array<{
    image?: string;
    title?: string;
    description?: string;
  }>;
}

@Block({
  label: 'Details List',
  icon: 'checklist_rtl',
  previewValue: {
    list: [
      {
        image: '/assets/images/pb-placeholders/160x160.png',
        title: 'Network',
        description: 'Lorem ipsum dolor sit amet, consec tetur Lorem ipsum dolor sit amet, consectetur'
      },
      {
        image: '/assets/images/pb-placeholders/160x160.png',
        title: 'Video Surveillance',
        description: 'Lorem ipsum dolor sit amet, consec tetur Lorem ipsum dolor sit amet, consectetur'
      },
    ],
    ...COMMON_OPTIONS.default
  },
  form: {
    segments: [
      {
        title: (index: number) => index === undefined ? 'Detail' : `Detail ${index + 1}`,
        array: '/list',
        fields: ['/title', '/description', '/image'],
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
              title: {type: 'string'},
              image: {type: 'string'},
              description: {type: 'string'},
            }
          }
        },
        ...COMMON_OPTIONS.properties
      }
    },
    definitions: {
      'list/title': {label: 'Title'},
      '/list/description': {
        label: 'Description',
        component: {
          type: 'textarea',
          configuration: {
            rows: 5
          }
        }
      },
      'list/image': {label: 'Image', ...IMAGE_DEFINITION},
      ...COMMON_OPTIONS.definitions
    }
  }
})
@Component({
  selector: 'jms-details-list',
  templateUrl: './details-list.component.html',
  styleUrls: ['./details-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsListComponent extends CommonBlockComponent<Options> {}
