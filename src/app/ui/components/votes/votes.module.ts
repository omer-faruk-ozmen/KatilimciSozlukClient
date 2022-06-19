import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VotesComponent } from './votes.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [VotesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: VotesComponent }]),
  ],
})
export class VotesModule {}
