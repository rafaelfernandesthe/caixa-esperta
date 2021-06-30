import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewPage } from './new.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { NewPageRoutingModule } from './new-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    NewPageRoutingModule
  ],
  declarations: [NewPage]
})
export class NewPageModule {}
