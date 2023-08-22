import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NtermsListComponent } from './nterms-list/nterms-list.component';
import { UpperboundListComponent } from './upperbound-list/upperbound-list.component';

const routes: Routes = [
  { path: "nterms", component: NtermsListComponent },
  { path: "upperbound", component: UpperboundListComponent },
  { path: "", redirectTo: "nterms", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
