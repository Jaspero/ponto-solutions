import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Block} from '@jaspero/fb-page-builder';
import {COMMON_OPTIONS} from '../common-options.const';
import {CommonBlockComponent, CommonOptions} from '../common.block';

interface Options extends CommonOptions {
  theme?: string;
}

@Block({
  label: 'Contact',
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
  selector: 'jms-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent extends CommonBlockComponent<Options> {
  tempData = {
    inquiries: [
      {
        label: 'New Project Inquiries',
        value: 'Sales@ClaritySSU.com'
      },
      {
        label: 'Finance',
        value: 'Accounts@ClaritySSU.com'
      }
    ],
    directories: [
      {
        name: 'Alex Petrou',
        title: 'President',
        value: 'Alex@ClaritySSU.com'
      },
      {
        name: 'Todd Spencer',
        title: 'Engineering Director',
        value: 'Todd@ClaritySSU.com'
      },
      {
        name: 'Danny Baker',
        title: 'Field Director',
        value: 'Danny@ClaritySSU.com'
      },
      {
        name: 'Shane Yarnell',
        title: 'Project Administration',
        value: 'Shane@ClaritySSU.com'
      }
    ]
  };
}
