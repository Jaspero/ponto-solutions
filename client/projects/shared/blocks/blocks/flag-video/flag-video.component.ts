import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Block} from '@jaspero/fb-page-builder';
import {COMMON_OPTIONS} from '../common-options.const';
import {CommonBlockComponent, CommonOptions} from '../common.block';

interface Options extends CommonOptions {
  
}

@Block({
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
  selector: 'jms-flag-video',
  templateUrl: './flag-video.component.html',
  styleUrls: ['./flag-video.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlagVideoComponent extends CommonBlockComponent<Options> {}