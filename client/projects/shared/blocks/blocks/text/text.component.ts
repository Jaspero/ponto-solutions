import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Block} from '@jaspero/fb-page-builder';
import {COMMON_OPTIONS} from '../common-options.const';
import {CommonBlockComponent, CommonOptions} from '../common.block';

interface Options extends CommonOptions {
  title?: string;
  titleWidth?: string;
  subtitle?: string;
  subtitleWidth?: string;
  theme?: string;
}

@Block({
  label: 'Text',
  icon: 'text_fields',
  previewValue: {
    title: 'SECURITY SYSTEM UNIFICATION',
    titleWidth: 'auto',
    subtitle: 'An expert team of system engineers and programming prowess',
    subtitleWidth: 'auto',
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
          '/titleWidth',
          '/subtitle',
          '/subtitleWidth',
          '/theme'
        ]
      },
      ...COMMON_OPTIONS.segment
    ],
    schema: {
      properties: {
        title: {type: 'string'},
        titleWidth: {type: 'string'},
        subtitle: {type: 'string'},
        subtitleWidth: {type: 'string'},
        theme: {type: 'string'},
        ...COMMON_OPTIONS.properties
      }
    },
    definitions: {
      title: {label: 'Title'},
      titleWidth: {label: 'Title Width'},
      subtitle: {label: 'Subtitle'},
      subtitleWidth: {label: 'Subtitle Width'},
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
  selector: 'jms-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextComponent extends CommonBlockComponent<Options> {}