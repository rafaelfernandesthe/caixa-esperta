import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ManagementPage } from './management.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ManagementPageRoutingModule } from './management-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: ManagementPage }]),
    ManagementPageRoutingModule,
  ],
  declarations: [ManagementPage]
})
export class ManagementPageModule {}
