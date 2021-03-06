import * as model from './model.js';
import recipeView from './views/recipeViews.js';



import 'core-js/stable';
import 'regenerator-runtime/runtime';





// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////





const controlRecipes = async function() {
    try {


        const id = window.location.hash.slice(1);
        if (!id) return;
        recipeView.renderSpinner();

        // 1) loading recipe
        await model.loadRecipe(id);

        // 2) rendering recipe
        recipeView.render(model.state.recipe);



    } catch (err) {
        alert(err);
        // console.error(data.message);
    }
}
const events = ['hashchange', 'load']
events.forEach(ev => window.addEventListener(ev, controlRecipes));

// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('load', controlRecipes);