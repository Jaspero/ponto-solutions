import {ChangeDetectionStrategy, Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {Block} from '@jaspero/fb-page-builder';
import {COMMON_OPTIONS} from '../common-options.const';
import {CommonBlockComponent, CommonOptions} from '../common.block';
import {IMAGE_DEFINITION} from '../utils';

interface Options extends CommonOptions {
  title?: string;
  link?: string;
  linkLabel?: string;
  projects?: Array<{
    image?: string;
    name?: string;
  }>;
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
        title: 'Content',
        icon: 'article',
        fields: [
          '/title',
          '/link',
          '/linkLabel'
        ]
      },
      {
        title: (index: number) => index === undefined ? 'Project' : `Project ${index + 1}`,
        array: '/projects',
        fields: ['/image', '/name', '/content'],
      },
      ...COMMON_OPTIONS.segment
    ],
    schema: {
      properties: {
        title: {type: 'string'},
        link: {type: 'string'},
        linkLabel: {type: 'string'},
        projects: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              image: {type: 'string'},
              name: {type: 'string'},
              content: {type: 'string'}
            }
          }
        },
        ...COMMON_OPTIONS.properties
      }
    },
    definitions: {
      title: {label: 'Title'},
      link: {label: 'Link'},
      linkLabel: {label: 'Link Label'},
      'projects/image': {label: 'Image', ...IMAGE_DEFINITION},
      'projects/name': {label: 'Name'},
      'projects/content': {
        label: 'Dialog',
        component: {
          type: 'tinymce'
        }
      },
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
export class ProjectsSliderComponent extends CommonBlockComponent<Options> {
  scrolled = 0;
  dp: any;
  dragging = false;

  @ViewChild('psList', {read: ElementRef, static: false})
  listEl: ElementRef<HTMLUListElement>;

  @HostListener('window:keydown.escape')
  keyDown() {
    this.dp = null;
    this.cdr.markForCheck();
  }

  @HostListener('window:mouseup')
  dragStop() {
    this.dragging = false;
  }

  @HostListener('window:mousemove', ['$event'])
  dragMove(event) {
    if (!this.dragging || (window.innerWidth < 800)) {
      return;
    }

    event.preventDefault();
    this.listEl.nativeElement.scrollLeft += event.movementX;
  }

  get scrollStyle() {
    return `width: ${this.scrolled}%`;
  }

  scroll(event) {
    const el = event.srcElement;
    this.scrolled = 100 * el.scrollLeft / (el.scrollWidth - el.clientWidth);
  }

  startDragging() {
    this.dragging = true;
  }

  openDialog(project) {
    if (!project.content) {
      return;
    }

    this.dp = project;
    this.cdr.markForCheck();
  }
}
