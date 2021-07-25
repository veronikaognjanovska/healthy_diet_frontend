import './App.css';
import React, {Component} from "react";
import Header from '../Header/Header';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import RecipeService from "../../service/RecipeService";

import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import RecipesList from "../Recipes/RecipesList";
import RecipeView from "../Recipes/RecipeView/RecipeView";
import Footer from "../Footer/Footer";
import RecipeEdit from "../Recipes/RecipeEdit/RecipeEdit";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            selectedRecipe: {}
        }
    };

    render() {
        return (
            <Router>
                <ReactNotification/>
                <Header/>
                <main>
                    <div className={"container pt-4"}>
                        <Route path={"/recipes/view/:id"} exact render={() =>
                            <RecipeView
                                recipe={this.state.selectedRecipe}
                                onEdit={this.getRecipe}
                            />
                        }/>
                        <Route path={"/recipes/edit/:id"} exact render={() =>
                            <RecipeEdit
                                recipe={this.state.selectedRecipe}
                                onEdit={this.editRecipe}
                            />
                        }/>
                        <Route path={"/recipes"} exact render={() =>
                            <RecipesList recipes={this.state.recipes}
                                         onViewDetails={this.onViewDetailsGet}
                            />
                        }/>
                        <Redirect to={"/recipes"}/>
                    </div>
                </main>
                <Footer/>
            </Router>
        );
    };

    componentDidMount() {
        this.loadRecipes();
    };

    loadRecipes = () => {
        RecipeService.fetchRecipes()
            .then((data) => {
                this.setState({
                    recipes: data.data
                });
            });
    };

    onViewDetailsGet = (id) => {
        this.getRecipe(id);
    };

    getRecipe = (id) => {
        RecipeService.getRecipe(id)
            .then((data) => {
                this.setState({
                    selectedRecipe: data.data
                })
            })
    };

    editRecipe = (id) => {
        console.log("edit!")
        RecipeService.editRecipe(id,)
            .then(() => {
                this.loadRecipes();
                // NotificationService.success('Success!', 'Recipe edited successfully!')
            });
    }


}

export default App;