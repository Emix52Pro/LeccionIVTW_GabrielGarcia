import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FranquiciaComponent } from './components/test/franquicia/franquicia.component';
import { HomeComponent } from './components/home/home.component';
import { FranquiciaEditComponent } from './components/test/franquicia-edit/franquicia-edit.component';

const routes: Routes = [
  {path:"franquicias", component:FranquiciaComponent},
  {path:"home", component:HomeComponent},
  {path:"franquicia-edit", component:FranquiciaEditComponent},
  {path:"franquicia-edit/:id", component:FranquiciaEditComponent},
  {path: '**', pathMatch:'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
