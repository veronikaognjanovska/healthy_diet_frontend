import axios from "../custom-axios/axios";
import React from "react";
import UserService from "./UserService";

const RecipeService = {

    fetchRecipes: () => {
        return axios.get("/recipes");
    },

    getRecipe: (id) => {
        return axios.get(`/recipes/${id}`);
    },

    onSearch: (searchInput, list) => {
        return axios.put(`/recipes/search`, {
            "searchInput": searchInput,
            "list": list
        });
    },

    addRecipe: (title, timeToPrepare, people, types, calories, preparation, ingredients) => {
        return axios.post(`/recipes/add`, {
            'title': title,
            'timeToPrepare': timeToPrepare,
            'people': people,
            'types': types,
            'by': "me",
            'calories': calories,
            'preparation': preparation,
            'ingredients': ingredients
        });
    },

    editRecipe: (id, title, timeToPrepare, people, types, calories, preparation, ingredients) => {
        return axios.put(`/recipes/edit/${id}`, {
            'title': title,
            'timeToPrepare': timeToPrepare,
            'people': people,
            'types': types,
            'by': UserService.getLoggedInUser(),
            'calories': calories,
            'preparation': preparation,
            'ingredients': ingredients
        });
    },

    getHealthyToday: (date) => {
        if (date === undefined) {
            return axios.get(`/healthy/${UserService.getLoggedInUser()}`);
        } else {
            return axios.get(`/healthy/${UserService.getLoggedInUser()}/${date}`);
        }
    },

    addToHealthyToday: (id) => {
        return axios.get(`/healthy/add/${UserService.getLoggedInUser()}/${id}`);
    },

    removeFromHealthyToday: (id) => {
        return axios.get(`/healthy/remove/${UserService.getLoggedInUser()}/${id}`);
    },

    save: (id) => {
        return axios.put(`/recipes/save/${UserService.getLoggedInUser()}/${id}`);
    },

    unsave: (id) => {
        return axios.put(`/recipes/unsave/${UserService.getLoggedInUser()}/${id}`);
    },

    delete: (id) => {
        return axios.delete(`/recipes/delete/${id}`);
    },

};

export default RecipeService;