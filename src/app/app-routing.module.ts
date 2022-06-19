import { HomeComponent } from './ui/components/home/home.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    component: LayoutComponent,
    children: [{ path: '', component: DashboardComponent }],
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'votes',
    loadChildren: () =>
      import('./ui/components/votes/votes.module').then(
        (module) => module.VotesModule
      ),
  },
  {
    path: 'entries',
    loadChildren: () =>
      import('./ui/components/entries/entries.module').then(
        (module) => module.EntriesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
