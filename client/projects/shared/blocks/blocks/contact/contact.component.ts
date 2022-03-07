import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Block} from '@jaspero/fb-page-builder';
import {COMMON_OPTIONS} from '../common-options.const';
import {CommonBlockComponent, CommonOptions} from '../common.block';

interface Options extends CommonOptions {
  titleOne?: string;
  titleTwo?: string;
  loginDescription?: string;
  description?: string;
  email?: string;
  loginLink?: string;
  loginLabel?: string;
  directionsTitle?: string;
  theme?: string;
  directories?: Array<{
    name?: string;
    title?: string;
    value?: string;
  }>;
  inquiries?: Array<{
    label?: string;
    value?: string;
  }>
}

@Block({
  label: 'Contact',
  icon: 'minimize',
  previewValue: {
    theme: 'theme-dark',
    directories: [],
    inquiries: [],
    ...COMMON_OPTIONS.default
  },
  form: {
    segments: [
      {
        title: 'Content',
        icon: 'article',
        fields: [
          '/titleOne',
          '/titleTwo',
          '/description',
          '/email',
          '/theme'
        ]
      },
      {
        title: 'Login',
        icon: 'article',
        fields: [
          '/loginDescription',
          '/loginLabel',
          '/loginLink',
        ]
      },
      {
        title: 'Directories',
        icon: 'article',
        fields: [
          '/directionsTitle'
        ]
      },
      {
        title: (index: number) => index === undefined ? 'Inquiry' : `Inquiry ${index + 1}`,
        array: '/inquiries',
        fields: ['/label', '/value'],
      },
      {
        title: (index: number) => index === undefined ? 'Director' : `Director ${index + 1}`,
        array: '/directories',
        fields: ['/name', '/title', '/value'],
      },
      ...COMMON_OPTIONS.segment
    ],
    schema: {
      properties: {
        theme: {type: 'string'},
        titleOne: {type: 'string'},
        titleTwo: {type: 'string'},
        loginLink: {type: 'string'},
        loginLabel: {type: 'string'},
        loginDescription: {type: 'string'},
        directionsTitle: {type: 'string'},
        description: {type: 'string'},
        email: {type: 'string'},
        inquiries: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              label: {type: 'string'},
              value: {type: 'string'}
            }
          }
        },
        directories: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              name: {type: 'string'},
              title: {type: 'string'},
              value: {type: 'string'},
            }
          }
        },
        ...COMMON_OPTIONS.properties
      }
    },
    definitions: {
      titleOne: {label: 'First Title'},
      titleTwo: {label: 'Second Title'},
      loginLink: {label: 'Link'},
      loginLabel: {label: 'Label'},
      description: {
        label: 'Description',
        component: {
          type: 'textarea',
          configuration: {
            rows: 5
          }
        }
      },
      email: {label: 'Email'},
      loginDescription: {
        label: 'Description',
        component: {
          type: 'textarea',
          configuration: {
            rows: 5
          }
        }
      },
      directionsTitle: {label: 'Title'},
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
      'inquiries/label': {label: 'Name'},
      'inquiries/value': {label: 'Email'},
      'directories/name': {label: 'Name'},
      'directories/title': {label: 'Title'},
      'directories/value': {label: 'Email'},
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
