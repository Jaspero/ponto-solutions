import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Block} from '@jaspero/fb-page-builder';
import {COMMON_OPTIONS} from '../common-options.const';
import {CommonBlockComponent, CommonOptions} from '../common.block';

interface Options extends CommonOptions {
  
}

@Block({
  label: 'Projects Slider',
  icon: 'money',
  previewValue: {
    title: 'Projects',
    link: '/',
    linkLabel: 'Find out more',
    projects: [
      {
        image: '/assets/images/pb-placeholders/522x300.png',
        name: 'Project 1'
      },
      {
        image: '/assets/images/pb-placeholders/522x300.png',
        name: 'Project 2'
      },
      {
        image: '/assets/images/pb-placeholders/522x300.png',
        name: 'Project 3'
      }
    ],
    ...COMMON_OPTIONS.defaults
  },
  form: {
    segments: [
      {

      },
      ...COMMON_OPTIONS.segment
    ],
    schema: {
      properties: {
        ...COMMON_OPTIONS.properties
      }
    },
    definitions: {
      ...COMMON_OPTIONS.definitions
    }
  }
})
@Component({
  selector: 'jms-projects-slider',
  templateUrl: './projects-slider.component.html',
  styleUrls: ['./projects-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsSliderComponent extends CommonBlockComponent<Options> {}
