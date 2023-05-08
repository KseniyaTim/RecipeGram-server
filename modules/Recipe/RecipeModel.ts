import mongoose, { Schema } from "mongoose";

export interface IRecipe {
  name: string;
  imgURL: string;
  user: string;
  likes: number;
  ingredients: string[];
  instructins: string[];
}

export const RecipeSchema = new Schema({
  name: String,
  imgURL: String,
  userId: String,
  likes: Number,
  ingredients: [String],
  instructins: [String],
});

const RecipeModel = mongoose.model("recipe", RecipeSchema);

export default RecipeModel;
