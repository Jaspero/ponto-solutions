import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Block} from '@jaspero/fb-page-builder';
import {COMMON_OPTIONS} from '../common-options.const';
import {CommonBlockComponent, CommonOptions} from '../common.block';

interface ContentOptions extends CommonOptions {
  content: string;
  theme: string;
}

@Block({
  label: 'PB.FORM.BLOCKS.CONTENT.TITLE',
  icon: 'article',
  previewValue: {
    content: '<h1>Custom Title</h1><h2>Custom Subtitle</h2><p>Custom content</p>',
    theme: 'theme-dark',
    ...COMMON_OPTIONS.defaults
  },
  form: {
    segments: [
      {
        title: 'Content',
        icon: 'subject',
        fields: [
          '/theme',
          '/content'
        ],
      },
      ...COMMON_OPTIONS.segment
    ],
    schema: {
      properties: {
        theme: {type: 'string'},
        content: {type: 'string'},
        ...COMMON_OPTIONS.properties
      }
    },
    definitions: {
      content: {
        label: '',
        component: {
          type: 'tinymce'
        }
      },
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
  selector: 'jms-content',
  templateUrl: './content.component.html',
  styleUrls: [
    '../common-styles.scss',
    './content.component.scss'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentComponent extends CommonBlockComponent<ContentOptions> {}
