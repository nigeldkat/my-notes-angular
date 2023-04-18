import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//page components
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { AboutComponent } from './about/about.component';
import { SupportComponent } from './support/support.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NoteListComponent } from './notes/notelist.component';
import { NoteItemsComponent } from './notes/noteitems.component';
import { LogInComponent } from './login/login.component';


const routes: Routes = [
  {path: 'page1', component: Page1Component},
  {path: 'page2', component: Page2Component},
  {path: 'page3', component: Page3Component},
  {path: 'about', component: AboutComponent},
  {path: 'notelist', component: NoteListComponent},
  {path: 'noteitems', component: NoteItemsComponent},
  {path: 'login', component: LogInComponent},
  {path: 'support', component: SupportComponent},
  {path: '', redirectTo: '/page1', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
