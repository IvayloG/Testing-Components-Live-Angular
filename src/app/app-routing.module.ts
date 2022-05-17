import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { LayoutsComponent } from './layouts/layouts.component';
import { PositionComponent } from './position/position.component';
import { TabLayoutComponent } from './tab-layout/tab-layout.component';
import { CardCalendarComponent } from './card-calendar/card-calendar.component';
import { ListsDataComponent } from './lists-data/lists-data.component';
import { DataGridLayoutsComponent } from './data-grid-layouts/data-grid-layouts.component';
import { TypeScaleComponent } from './type-scale/type-scale.component';
import { InputsComponent } from './inputs/inputs.component';
import { PickersComboComponent } from './pickers-combo/pickers-combo.component';
import { DialogsAndOverlaysComponent } from './dialogs-and-overlays/dialogs-and-overlays.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { ImageComponent } from './image/image.component';
import { CopyPasteComponent } from './copy-paste/copy-paste.component';

export const routes: Routes = [
  { path: '', redirectTo: 'layouts', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'layouts', component: LayoutsComponent, data: { text: 'Layouts' } },
  { path: 'position', component: PositionComponent, data: { text: 'Position' } },
  { path: 'tab-layout', component: TabLayoutComponent, data: { text: 'Tab layout' } },
  { path: 'card-calendar', component: CardCalendarComponent, data: { text: 'Card +Calendar' } },
  { path: 'lists-data', component: ListsDataComponent, data: { text: 'Lists + data' } },
  { path: 'data-grid-layouts', component: DataGridLayoutsComponent, data: { text: 'Data-grid layouts' } },
  { path: 'type-scale', component: TypeScaleComponent, data: { text: 'Type + scale' } },
  { path: 'inputs', component: InputsComponent, data: { text: 'Inputs' } },
  { path: 'pickers-combo', component: PickersComboComponent, data: { text: 'Pickers + Combo' } },
  { path: 'dialogs-and-overlays', component: DialogsAndOverlaysComponent, data: { text: 'Dialogs and overlays' } },
  { path: 'sign-in-page', component: SignInPageComponent, data: { text: 'Sign in page' } },
  { path: 'image', component: ImageComponent, data: { text: 'Image' } },
  { path: 'copy-paste', component: CopyPasteComponent, data: { text: 'copy-paste' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
