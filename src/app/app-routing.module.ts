import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailsComponent} from './recipe-details/recipe-details.component';
import { RecipeFinderComponent} from './recipe-finder/recipe-finder.component';
import{ SavedRecipesComponent } from './saved-recipes/saved-recipes.component';

const routes: Routes = [
  { path: 'recipe-details', component: RecipeDetailsComponent },
  { path: 'saved-recipes', component: SavedRecipesComponent},
  { path: '', component: RecipeFinderComponent },
  //{ path: '', redirectTo: '/heroes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
