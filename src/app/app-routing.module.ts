import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailsComponent} from './recipe-details/recipe-details.component'

const routes: Routes = [
  { path: 'recipe-details', component: RecipeDetailsComponent },
//  { path: 'heroes', component: HeroListComponent },
  //{ path: '', redirectTo: '/heroes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
