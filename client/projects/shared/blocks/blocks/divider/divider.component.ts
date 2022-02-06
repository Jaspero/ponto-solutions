import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Block} from '@jaspero/fb-page-builder';
import {COMMON_OPTIONS} from '../common-options.const';
import {CommonBlockComponent, CommonOptions} from '../common.block';

interface Options extends CommonOptions {
  theme?: string;
}

@Block({
  label: 'Divider',
  icon: 'minimize',
  previewValue: {
    theme: 'theme-dark',
    ...COMMON_OPTIONS.default
  },
  form: {
    segments: [
      {
        title: 'Content',
        icon: 'article',
        fields: [
          '/theme'
        ]
      },
      ...COMMON_OPTIONS.segment
    ],
    schema: {
      properties: {
        theme: {type: 'string'},
        ...COMMON_OPTIONS.properties
      }
    },
    definitions: {
      theme: {
        label: 'Theme',
        component: {
          type: 'select',
          configuration: {
            dataSet: [
              {name: 'Dark', value: 'theme-dark'},
              {name: 'Light', value: 'theme-light'}
            ]
          }
        }
      },
      ...COMMON_OPTIONS.definitions
    }
  }
})
@Component({
  selector: 'jms-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DividerComponent extends CommonBlockComponent<Options> {}
