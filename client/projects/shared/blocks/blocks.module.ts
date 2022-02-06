import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {InlineEditorModule} from '@jaspero/fb-page-builder';
import {LoadClickModule, SanitizeModule} from '@jaspero/ng-helpers';
import {FormUiRendererModule} from '@shared/modules/form-ui-renderer/form-ui-renderer.module';
import {BlockRendererComponent} from './block-renderer/block-renderer.component';
import {BannerComponent} from './blocks/banner/banner.component';
import {CommonBlockComponent} from './blocks/common.block';
import {ContentComponent} from './blocks/content/content.component';
import {DetailsListComponent} from './blocks/details-list/details-list.component';
import {FeedbackSliderComponent} from './blocks/feedback-slider/feedback-slider.component';
import {FlagImageComponent} from './blocks/flag-image/flag-image.component';
import {FlagListComponent} from './blocks/flag-list/flag-list.component';
import {FlagVideoComponent} from './blocks/flag-video/flag-video.component';
import {FooterComponent} from './blocks/footer/footer.component';
import {FormComponent} from './blocks/form/form.component';
import {HeroGalleryComponent} from './blocks/hero-gallery/hero-gallery.component';
import {HeroTitleComponent} from './blocks/hero-title/hero-title.component';
import {MarqueeComponent} from './blocks/marquee/marquee.component';
import {ProjectsSliderComponent} from './blocks/projects-slider/projects-slider.component';
import {SnippetComponent} from './blocks/snippet/snippet.component';
import {TextComponent} from './blocks/text/text.component';
import {BlockLinkDirective} from './directives/block-link/block-link.directive';

const B_COMPONENTS = [
  BlockRendererComponent,

  ContentComponent,
  FormComponent,
  HeroGalleryComponent,
  BannerComponent,
  MarqueeComponent,
  FlagListComponent,
  FlagImageComponent,
  FlagVideoComponent,
  DetailsListComponent,
  ProjectsSliderComponent,
  FooterComponent,
  HeroTitleComponent,
  TextComponent,
  SnippetComponent,
  FeedbackSliderComponent
];

@NgModule({
  declarations: [
    CommonBlockComponent,
    BlockLinkDirective,
    ...B_COMPONENTS
  ],
  exports: [
    ...B_COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,

    FormUiRendererModule,

    InlineEditorModule,

    SanitizeModule,
    LoadClickModule
  ]
})
export class BlocksModule { }
