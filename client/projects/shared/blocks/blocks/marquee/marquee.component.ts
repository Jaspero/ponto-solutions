import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Block} from '@jaspero/fb-page-builder';
import {COMMON_OPTIONS} from '../common-options.const';
import {CommonBlockComponent, CommonOptions} from '../common.block';
import {IMAGE_DEFINITION} from '../utils';

interface Options extends CommonOptions {
  top?: string;
  bottom?: string;
  image?: string;
}

@Block({
  label: 'Maruquee',
  icon: 'streetview',
  previewValue: {
    top: 'Simplify Your Systems',
    bottom: 'Understand Your Infrastructure',
    image: '/assets/images/pb-placeholders/1200x800.png',
    ...COMMON_OPTIONS.default
  },  
  form: {
    segments: [
      {
        title: 'Content',
        icon: 'article',
        fields: [
          '/top',
          '/bottom',
          '/image',
          '/imageAlt'
        ]
      },
      ...COMMON_OPTIONS.segment
    ],
    schema: {
      properties: {
        top: {type: 'string'},
        bottom: {type: 'string'},
        image: {type: 'string'},
        imageAlt: {type: 'string'},
        ...COMMON_OPTIONS.properties
      }
    },
    definitions: {
      top: {label: 'Top Text'},
      bottom: {label: 'Bottom Text'},
      image: {label: 'Image', ...IMAGE_DEFINITION},
      imageAlt: {label: 'Image Alt Description'},
      ...COMMON_OPTIONS.definitions
    }
  }
})
@Component({
  selector: 'jms-marquee',
  templateUrl: './marquee.component.html',
  styleUrls: ['./marquee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarqueeComponent extends CommonBlockComponent<Options> {}