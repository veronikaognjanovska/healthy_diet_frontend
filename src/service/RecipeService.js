import axios from "../custom-axios/axios";

const RecipeService = {

    fetchRecipes: () => {
        return axios.get("/recipes");
    },

    getRecipe: (id) => {
        return axios.get(`/recipe/${id}`);
    },


};

export default RecipeService;