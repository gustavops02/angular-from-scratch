import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { EmitterComponent } from './components/emitter/emitter.component';

const routes: Routes = [
  { path: '', component: EmitterComponent },
  { path: 'change', component: ChangeNumberComponent },
  { path: 'lista', component: ListRenderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
