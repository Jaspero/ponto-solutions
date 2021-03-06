import {STATIC_CONFIG} from '../../environments/static-config';
import {ChangeEmailComponent} from './change-email/change-email.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {FileManagerSelectComponent} from './file-manager-select/file-manager-select.component';
import {ImpersonateComponent} from './impersonate/impersonate.component';
import {LinkComponent} from './link/link.component';
import {NewPrepopulateComponent} from './new-prepopulate/new-prepopulate.component';
import {SampleEmailComponent} from './sample-email/sample-email.component';
import {TableComponent} from './table/table.component';
import {UserActionsComponent} from './user-actions/user-actions.component';
import {TriggerPasswordResetComponent} from './trigger-password-reset/trigger-password-reset.component';
import {UserAddComponent} from './user-add/user-add.component';

export const ELEMENTS = [
  LinkComponent,
  TableComponent,
  TriggerPasswordResetComponent,
  UserAddComponent,
  ChangePasswordComponent,
  UserActionsComponent,
  ChangeEmailComponent,
  NewPrepopulateComponent,
  FileManagerSelectComponent,
  SampleEmailComponent,
  ImpersonateComponent
];

export const ELEMENT_SELECTOR = [
  {
    selector: STATIC_CONFIG.elementSelectorPrefix + 'link',
    component: LinkComponent
  },
  {
    selector: STATIC_CONFIG.elementSelectorPrefix + 'table',
    component: TableComponent
  },
  {
    selector: STATIC_CONFIG.elementSelectorPrefix + 'tpr',
    component: TriggerPasswordResetComponent
  },
  {
    selector: STATIC_CONFIG.elementSelectorPrefix + 'user-add',
    component: UserAddComponent
  },
  {
    selector: STATIC_CONFIG.elementSelectorPrefix + 'cp',
    component: ChangePasswordComponent
  },
  {
    selector: STATIC_CONFIG.elementSelectorPrefix + 'user-actions',
    component: UserActionsComponent
  },
  {
    selector: STATIC_CONFIG.elementSelectorPrefix + 'ce',
    component: ChangeEmailComponent
  },
  {
    selector: STATIC_CONFIG.elementSelectorPrefix + 'new-prepopulate',
    component: NewPrepopulateComponent
  },
  {
    selector: STATIC_CONFIG.elementSelectorPrefix + 'file-manager-select',
    component: FileManagerSelectComponent
  },
  {
    selector: STATIC_CONFIG.elementSelectorPrefix + 'sample-email',
    component: SampleEmailComponent
  },
  {
    selector: STATIC_CONFIG.elementSelectorPrefix + 'impersonate',
    component: ImpersonateComponent
  }
];
