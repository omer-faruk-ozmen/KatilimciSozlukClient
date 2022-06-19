import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntriesComponent } from './entries.component';

@NgModule({
  declarations: [EntriesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: EntriesComponent }]),
  ],
})
export class EntriesModule {}
