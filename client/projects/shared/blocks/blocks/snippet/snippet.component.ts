import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, HostListener, OnDestroy, Renderer2} from '@angular/core';
import {Block} from '@jaspero/fb-page-builder';
import {COMMON_OPTIONS} from '../common-options.const';
import {CommonBlockComponent, CommonOptions} from '../common.block';
import {IMAGE_DEFINITION} from '../utils';

interface Options extends CommonOptions {
  title?: string;
  subtitle?: string;
  button?: string;
  theme?: string;
  image?: string;
  content?: string;
}

@Block({
  label: 'Snippet',
  icon: 'expand',
  previewValue: {
    title: 'ENTERTAINMENT VENUES',
    subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not.',
    button: 'Expand',
    theme: 'theme-accent',
    content: `<h1>title</h1><p>paragraph</p>`,
    image: '/assets/images/pb-placeholders/1200x800.png',
    ...COMMON_OPTIONS.default
  },
  form: {
    segments: [
      {
        title: 'Content',
        icon: 'article',
        fields: [
          '/title',
          '/subtitle',
          '/button',
          '/theme',
          '/image',
          '/content'
        ]
      },
      ...COMMON_OPTIONS.segment
    ],
    schema: {
      properties: {
        title: {type: 'string'},
        subtitle: {type: 'string'},
        button: {type: 'string'},
        theme: {type: 'string'},
        image: {type: 'string'},
        content: {type: 'string'},
        ...COMMON_OPTIONS.properties
      }
    },
    definitions: {
      title: {label: 'Title'},
      subtitle: {label: 'Subtitle'},
      button: {label: 'Button Label'},
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
      image: {label: 'Image', ...IMAGE_DEFINITION},
      content: {
        label: 'Content',
        component: {
          type: 'tinymce'
        }
      },
      ...COMMON_OPTIONS.definitions
    }
  }
})
@Component({
  selector: 'jms-snippet',
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SnippetComponent extends CommonBlockComponent<Options> {
  expanded = false;
}
