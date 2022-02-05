import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, HostListener, OnDestroy, Renderer2} from '@angular/core';
import {Block} from '@jaspero/fb-page-builder';
import {COMMON_OPTIONS} from '../common-options.const';
import {CommonBlockComponent, CommonOptions} from '../common.block';
import {IMAGE_DEFINITION} from '../utils';

interface Options extends CommonOptions {
  title?: string;
  description?: string;
  link?: string;
  linkLabel?: string;
  image?: string;
  videoCover?: string,
  videoSrc?: string,
  videoWidth?: number,
  videoHeight?: number
}

@Block({
  label: 'Flag Video',
  icon: 'play_circle_filled',
  previewValue: {
    title: 'Industry Experts',
    description: 'An expert team of system engineers and programming prowess. An expert team of system engineers and programming prowess.',
    link: '/',
    linkLabel: 'Find out more',
    videoCover: '/assets/images/pb-placeholders/449x603.png',
    videoSrc: 'https://www.youtube.com/embed/tgbNymZ7vqY',
    videoWidth: 1200,
    videoHeight: 700,
    ...COMMON_OPTIONS.default
  },
  form: {
    segments: [
      {
        title: 'Content',
        icon: 'article',
        fields: [
          '/title',
          '/description',
          '/link',
          '/linkLabel',
          '/videoCover',
          '/videoSrc',
          '/videoWidth',
          '/videoHeight'
        ]
      },
      ...COMMON_OPTIONS.segment
    ],
    schema: {
      properties: {
        title: {type: 'string'},
        description: {type: 'string'},
        link: {type: 'string'},
        linkLabel: {type: 'string'},
        videoCover: {type: 'string'},
        videoSrc: {type: 'string'},
        videoWidth: {type: 'string'},
        videoHeight: {type: 'string'},
        ...COMMON_OPTIONS.properties
      }
    },
    definitions: {
      title: {label: 'Title'},
      description: {
        label: 'Description',
        component: {
          type: 'textarea',
          configuration: {
            rows: 5
          }
        }
      },
      link: {label: 'Link'},
      linkLabel: {label: 'Link Label'},
      videoCover: {label: 'Video Cover', ...IMAGE_DEFINITION},
      videoSrc: {label: 'Video Source (YouTube URL)'},
      videoWidth: {label: 'Video Width'},
      videoHeight: {label: 'Video Height'},
      ...COMMON_OPTIONS.definitions
    }
  }
})
@Component({
  selector: 'jms-flag-video',
  templateUrl: './flag-video.component.html',
  styleUrls: ['./flag-video.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlagVideoComponent extends CommonBlockComponent<Options> implements OnDestroy {
  constructor(
    public cdr: ChangeDetectorRef,
    public el: ElementRef,
    private rendere: Renderer2
  ) {
    super(cdr, el);
  }

  showing = false;

  @HostListener('window:keydown', ['$event'])
  keyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      close();
    }
  }

  ngOnDestroy() {
    if (this.showing) {
      this.close();
    }
  }

  open() {
    this.showing = true;
    this.rendere.addClass(document.body, 'scroll-disabled');
  }

  close() {
    this.showing = false;
    this.rendere.removeClass(document.body, 'scroll-disabled');
  }
}