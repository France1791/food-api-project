import axios from "axios";

async function getRecipe(){
  try{

const allRecipe = await axios.get("https://api.spoonacular.com/recipes/random?number=7&tags=vegetarian&apiKey=d417d1d88e5f42de9e7cf4827e89387d");
    console.log(allRecipe);
    if( allRecipe.status = 200){
      return allRecipe.data;
    } else{
      return null;
    }
  } catch(error){
    console.log(error);
  }
}

// getRecipe();

async function showRecipe(){
  const recipeContainer = document.getElementById("recipeContainer");

  const recipeGenerateButton = document.getElementById("recipeGeneratorButton");

  

  recipeGenerateButton.addEventListener("click", async function(){
    const newRecipe = await getRecipe();
    console.log(newRecipe);
    newRecipe.recipes.forEach(function(recipe){
      const newRecipeElement = document.createElement("img");
      newRecipeElement.src = recipe.image;
      recipeContainer.append(newRecipeElement);
    })
     
  })

  // recipeContainer.append(newRecipeElement);
  // const recipeData = await getRecipe();
  // console.log(recipeData);
}
showRecipe();
