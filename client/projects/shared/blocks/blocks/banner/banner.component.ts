import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Block} from '@jaspero/fb-page-builder';
import {COMMON_OPTIONS} from '../common-options.const';
import {CommonBlockComponent, CommonOptions} from '../common.block';

interface Options extends CommonOptions {
  title: string;
}

@Block({
  label: 'Banner',
  icon: 'image',
  previewValue: {
    title: 'The Solution Is Clear',
    ...COMMON_OPTIONS.defaults
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
      ...COMMON_OPTIONS.segment
    ],
    schema: {
      properties: {
        title: {type: 'string'},
        ...COMMON_OPTIONS.properties
      }
    },
    definitions: {
      title: {label: 'Title'},
      ...COMMON_OPTIONS.definitions
    }
  }
})
@Component({
  selector: 'jms-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerComponent extends CommonBlockComponent<Options> {}
