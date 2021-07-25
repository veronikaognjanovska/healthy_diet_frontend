import React from 'react';
import ReactPaginate from 'react-paginate';
import RecipeComponent from "./RecipeComponent/RecipeComponent";
import './Recipes.css';
import {Link} from "react-router-dom";

class RecipesList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            size: 9
        }
    }

    render() {
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.recipes.length / this.state.size);
        const recipeList = this.getRecipesPage(offset, nextPageOffset);

        return (
            <div className={"row"}>
                <div className={"col-12 text-center"}>
                    <h1>Recipes</h1>
                </div>
                <div className={"col-12 d-flex justify-content-between pl-0"}>
                    <div className={"col-4 d-inline-block"}>
                        <Link className={"col-12 btn btn-success"} to={"/recipes/search"}>Search</Link>
                    </div>
                    <div className={"col-4 d-inline-block"}>
                        <Link className={"col-12 btn btn-success"} to={"/recipes/add"}>Add New Recipe</Link>
                    </div>
                </div>
                <div className={"col-12"}>
                    <div className={"row d-flex justify-content-start"}>
                        {recipeList}
                    </div>
                    <div className="col mb-3">
                        <div className="row">
                            <div className="col-sm-12 col-sm-12">
                                <ReactPaginate previousLabel={"back"}
                                               nextLabel={"next"}
                                               breakLabel={<a href="/#">...</a>}
                                               breakClassName={"break-me"}
                                               pageClassName={"ml-1"}
                                               pageCount={pageCount}
                                               marginPagesDisplayed={2}
                                               pageRangeDisplayed={5}
                                               onPageChange={this.handlePageClick}
                                               containerClassName={"pagination react-pagination-js-border-bottom mb-3 justify-content-center"}
                                               activeClassName={"active"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


    handlePageClick = (data) => {
        let selected = data.selected;
        this.setState({
            page: selected
        });
    }

    getRecipesPage = (offset, nextPageOffset) => {
        return this.props.recipes.map((term, index) => {
            return (
                <RecipeComponent key={index} term={term} onViewDetails={this.props.onViewDetails}/>
            );
        }).filter((recipe, index) => {
            return index >= offset && index < nextPageOffset;
        })
    }

}

export default RecipesList;