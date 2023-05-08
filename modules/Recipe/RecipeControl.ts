import RecipeModel from "./RecipeModel";

export const getRecipes = async (req: any, res: any) => {
  try {
    const recipes = await RecipeModel.find({});
    res.send(recipes);
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const addRecipe = async (req: any, res: any) => {

    const {recipe} = req.body
    const recipeDB = await RecipeModel.create({
        name: recipe.name,
        imgURL: recipe.imgURL,
        userId: recipe.userId,
        likes: recipe.likes,
        ingredients: recipe.ingredients,
        instructins: recipe.instructins
    })
  try {
    console.log(req.body);
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
