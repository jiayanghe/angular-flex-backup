import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ContainerBasicsComponent} from './components/container-basics/container-basics.component';
import {JustifyingContentComponent} from './components/justifying-content/justifying-content.component';
import {AligningItemsComponent} from './components/aligning-items/aligning-items.component';
import {FlexLayoutGapComponent} from './components/flex-layout-gap/flex-layout-gap.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'container-basics', component: ContainerBasicsComponent },
  { path: 'justifying-content', component: JustifyingContentComponent },
  { path: 'aligning-items', component: AligningItemsComponent },
  { path: 'flex-layout-gap', component: FlexLayoutGapComponent },
  { path: '**', component: HomeComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
