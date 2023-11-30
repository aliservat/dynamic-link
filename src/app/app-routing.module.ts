import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {TestComponent} from "./test/test.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  // {
  //   path: ':lang',
  //   children: [
  {path: '', component: HomeComponent},
  {path: 'test', component: TestComponent},

  //   ]
  // },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
