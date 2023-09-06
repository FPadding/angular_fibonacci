import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FibonacciListComponent } from './fibonacci-list/fibonacci-list.component';
import { HomeComponent } from './home/home.component';
import { PrimeListComponent } from './prime-list/prime-list.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "fibonacci", component: FibonacciListComponent },
  { path: "prime", component: PrimeListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
