import { EntriesModule } from './entries/entries.module';
import { VotesModule } from './votes/votes.module';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule, HomeModule, VotesModule, EntriesModule],
})
export class ComponentsModule {}
