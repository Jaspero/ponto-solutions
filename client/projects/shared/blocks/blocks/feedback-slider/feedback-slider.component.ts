import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Block} from '@jaspero/fb-page-builder';
import {COMMON_OPTIONS} from '../common-options.const';
import {CommonBlockComponent, CommonOptions} from '../common.block';
import {IMAGE_DEFINITION} from '../utils';

interface Options extends CommonOptions {
  title?: string;
  theme?: string;
  feedbacks?: Array<{
    content?: string;
    image?: string;
    name?: string;
    title?: string;
  }>;
}

@Block({
  label: 'Feedback Slider',
  icon: 'thumb_up_off_alt',
  previewValue: {
    title: 'See what others say about us.',
    theme: 'theme-light',
    feedbacks: [{
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet. Mauris vitae ultricies leo integer malesuada. Ac odio tempor orci dapibus ultrices in. Egestas diam in arcu cursus euismod. Dictum fusce ut placerat orci nulla. Tincidunt ornare massa eget egestas purus viverra accumsan in.',
      image: '/assets/images/pb-placeholders/160x160.png',
      name: 'John Doe',
      title: 'Anonymus',
    }],
    ...COMMON_OPTIONS.default
  },
  form: {
    segments: [
      {
        title: 'Content',
        icon: 'article',
        fields: [
          '/title',
          '/theme',
        ]
      },
      {
        title: (index: number) => index === undefined ? 'Feedback' : `Feedback ${index + 1}`,
        array: '/feedbacks',
        fields: ['/name', '/title', '/image', '/content'],
      },
      ...COMMON_OPTIONS.segment
    ],
    schema: {
      properties: {
        title: {type: 'string'},
        theme: {type: 'string'},
        feedbacks: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              name: {type: 'string'},
              title: {type: 'string'},
              image: {type: 'string'},
              content: {type: 'string'},
            }
          }
        },
        ...COMMON_OPTIONS.properties
      }
    },
    definitions: {
      title: {label: 'Title'},
      theme: {
        label: 'Theme',
        component: {
          type: 'select',
          configuration: {
            dataSet: [
              {name: 'Light', value: 'theme-light'},
              {name: 'Accent', value: 'theme-accent'},
            ]
          }
        }
      },
      'feedbacks/name': {label: 'Name'},
      'feedbacks/title': {label: 'Title'},
      'feedbacks/image': {label: 'Image', ...IMAGE_DEFINITION},
      'feedbacks/content': {
        label: 'Content',
        component: {
          type: 'textarea',
          configuration: {
            rows: 5
          }
        }
      },
      ...COMMON_OPTIONS.definitions
    }
  }
})
@Component({
  selector: 'jms-feedback-slider',
  templateUrl: './feedback-slider.component.html',
  styleUrls: ['./feedback-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedbackSliderComponent extends CommonBlockComponent<Options> {
  scrolled = 0;

  get scrollStyle() {
    return `width: ${this.scrolled}%`;
  }

  scroll(event) {
    const el = event.srcElement;
    this.scrolled = 100 * el.scrollLeft / (el.scrollWidth - el.clientWidth);
  }
}