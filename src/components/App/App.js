import './App.css';
import React, {Component} from "react";
import Header from '../Header/Header';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import RecipeService from "../../service/RecipeService";

import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import RecipesList from "../Recipes/RecipesList";

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
                        <Route path={"/recipes"} exact render={() =>
                            <RecipesList recipes={this.state.recipes}
                                         onEdit={this.getRecipe}
                            />
                        }/>
                        <Redirect to={"/recipes"}/>
                    </div>
                </main>
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
                })
            });
    };

    onViewGet = (id) => {
        this.getRecipe(id);
    };

    reloadSelected() {
        this.loadRecipes();
        this.getRecipe(this.state.selectedRecipe.id);
    };

    getRecipe = (id) => {
        RecipeService.getRecipe(id)
            .then((data) => {
                this.setState({
                    selectedRecipe: data.data
                })
            })
    };

}

export default App;