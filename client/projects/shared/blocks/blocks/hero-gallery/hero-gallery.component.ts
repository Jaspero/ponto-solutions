import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone, ViewChild} from '@angular/core';
import {Block} from '@jaspero/fb-page-builder';
import {SwiperComponent} from 'swiper/angular';
import {COMMON_OPTIONS} from '../common-options.const';
import {CommonBlockComponent, CommonOptions} from '../common.block';
import {IMAGE_DEFINITION} from '../utils';

interface Options extends CommonOptions {
  title?: string;
  subtitle?: string;
  dark?: boolean;
  slides: Array<{
    image: string;
    alt?: string;
  }>
}

@Block({
  label: 'Hero Gallery',
  icon: 'view_carousel',
  previewValue: {
    title: 'SECURITY SYSTEM UNIFICATION',
    subtitle: 'An expert team of system engineers and programming prowess',
    slides: [
      {image: '/assets/images/pb-placeholders/1200x800.png'}
    ],
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
          '/dark'
        ]
      },
      {
        title: (index: number) => index === undefined ? 'Slide' : `Slide ${index + 1}`,
        array: '/slides',
        fields: [
          '/image',
          '/alt',
          '/backgroundPosition',
          '/backgroundPositionMobile'
        ],
      },
      ...COMMON_OPTIONS.segment
    ],
    schema: {
      properties: {
        title: {type: 'string'},
        subtitle: {type: 'string'},
        dark: {type: 'boolean'},
        slides: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              image: {type: 'string'},
              alt: {type: 'string'},
              backgroundPosition: {type: 'string'},
              backgroundPositionMobile: {type: 'string'},
            }
          }
        },
        ...COMMON_OPTIONS.properties
      }
    },
    definitions: {
      title: {label: 'Title'},
      subtitle: {label: 'Subtitle'},
      dark: {label: 'Dark Theme'},
      'slides/image': {label: 'Image', ...IMAGE_DEFINITION},
      'slides/alt': {label: 'Alt Description'},
      ...COMMON_OPTIONS.definitions
    }
  }
})
@Component({
  selector: 'jms-hero-gallery',
  templateUrl: './hero-gallery.component.html',
  styleUrls: ['./hero-gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroGalleryComponent extends CommonBlockComponent<Options> {
  constructor(
    public cdr: ChangeDetectorRef,
    public el: ElementRef,
    private ngZone: NgZone
  ) {
    super(cdr, el);
  }


  @ViewChild(SwiperComponent, { static: true }) swiper: SwiperComponent;

  activeSlide = 0;

  get desktop() {
    return window.innerWidth > 800;
  }

  onSwipe(e) {
    this.ngZone.run(() =>
      this.activeSlide = e[0].realIndex
    )
  }

  sl(index: number) {
    this.swiper.swiperRef.slideTo(index, 300);
    this.activeSlide = index;
  }
}
