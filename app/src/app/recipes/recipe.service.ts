import { Injectable } from '@angular/core';

import { Recipe } from "./recipe";
import { Ingredient } from "../shared";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Loans', '', '', [
      new Ingredient('form 1034E', 2),
      new Ingredient('Bill of sale', 1)
    ]),
    new Recipe('COntracts', '', '', [
      new Ingredient('view contracts', 2),
      new Ingredient('contract results', 1)
      ])
  ];

  constructor() {}

  getRecipes() {
    return this.recipes;
  }

}
