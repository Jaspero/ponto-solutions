import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Block} from '@jaspero/fb-page-builder';
import {COMMON_OPTIONS} from '../common-options.const';
import {CommonBlockComponent, CommonOptions} from '../common.block';
import {IMAGE_DEFINITION} from '../utils';

interface Options extends CommonOptions {
  title?: string;
  gallery?: Array<{
    image?: string;
    alt?: string;
  }>;
}

@Block({
  label: 'Gallery',
  icon: 'filter_8',
  previewValue: {
    title: 'Products We Admire',
    gallery: [
      {image: '/assets/images/pb-placeholders/1200x800.png'}
    ],
    ...COMMON_OPTIONS.default
  },
  form: {
    segments: [
      {
        title: 'Content',
        icon: 'article',
        fields: [
          '/title'
        ]
      },
      {
        title: (index: number) => index === undefined ? 'Image' : `Image ${index + 1}`,
        array: '/gallery',
        fields: ['/image', '/alt', '/link'],
      },
      ...COMMON_OPTIONS.segment
    ],
    schema: {
      properties: {
        title: {type: 'string'},
        gallery: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              image: {type: 'string'},
              alt: {type: 'string'},
              link: {type: 'string'}
            }
          }
        },
        ...COMMON_OPTIONS.properties
      }
    },
    definitions: {
      title: {label: 'Title'},
      'gallery/image': {label: 'Image', ...IMAGE_DEFINITION},
      'gallery/alt': {label: 'Alt Description'},
      'gallery/link': {label: 'Link'},
      ...COMMON_OPTIONS.definitions
    }
  }
})
@Component({
  selector: 'jms-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent extends CommonBlockComponent<Options> {}
