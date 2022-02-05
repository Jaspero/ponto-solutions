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
  selector: 'jms-flag-image',
  templateUrl: './flag-image.component.html',
  styleUrls: ['./flag-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlagImageComponent extends CommonBlockComponent<Options> {}
