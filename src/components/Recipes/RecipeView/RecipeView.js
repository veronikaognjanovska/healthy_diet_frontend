import React from 'react';
import {Link, withRouter} from "react-router-dom";
import recipe from "../../../assets/Screenshot_6.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUtensils, faTimesCircle, faBookmark} from "@fortawesome/free-solid-svg-icons";
import {faClock, faUser, faBookmark as faBookmarkRegular, faEdit} from "@fortawesome/free-regular-svg-icons";
import ReactStars from "react-rating-stars-component";
import '../Recipes.css';
import Question from "../../Modals/Question";

class RecipeView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            question: '',
            color: '',
            action: '',
            saveIcon: faBookmarkRegular,
            healthyIcon: 'icon icon-actions mr-2'
        }
    }

    showModal = (question, color, action) => {
        if (action === 'healthyToday' && this.state.healthyIcon === 'icon icon-actions mr-2 healthyIcon') {
            return this.setState({
                healthyIcon: 'icon icon-actions mr-2'
            });
        }
        this.setState({
            show: true,
            question: question,
            color: color,
            action: action
        });
    }

    hideModal = (answer) => {
        this.setState({show: false});
        if (answer === 'delete') {
            console.log('delete')
            this.props.history.push(`/recipes`);
        } else if (answer === 'healthyToday') {
            console.log('healthyToday')
            this.setState({
                healthyIcon: 'icon icon-actions mr-2 healthyIcon'
            });
        }
    }

    saveRecipe = () => {
        console.log("-----------")
        if (this.state.saveIcon === faBookmarkRegular) {
            // save it
            this.setState({saveIcon: faBookmark});
        } else {
            //unsave it
            this.setState({saveIcon: faBookmarkRegular});
        }
    }

    render() {
        return (
            <div className={"row"}>
                <div className={"col-12 d-flex justify-content-center mt-3 mb-3"}>
                    <h4>{this.props.recipe.title}</h4>
                </div>
                <div className={"col-12 back"}>
                    <Link className={"btn btn-success btn-green float-left py-1 px-2"} to={"/recipes"}>Back</Link>
                </div>

                {/*part1*/}
                <div className={"col-sm-12 col-md-6 m-auto"}>
                    <img className={"recipe-image"} src={recipe} alt="recipe image"/>
                </div>
                <div className={"col-sm-12 col-md-6 info mt-4"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <Link className={"color-gray float-left"} to={"/recipes"}>By
                                @{this.props.recipe.by}</Link>
                        </div>
                        <div className={"col-6 color-gray text-right"}>
                            <tspan>Time: {this.props.recipe.datetime}</tspan>
                        </div>
                    </div>
                    <div className={"row mt-4"}>
                        <div className={"col-3 pr-0"}>
                            <FontAwesomeIcon icon={faClock} className={"icon mr-2"}/>
                            <span className={"icon-span"}>{this.props.recipe.time} min</span>
                        </div>
                        <div className={"col-3 pr-0"}>
                            <FontAwesomeIcon icon={faUser} className={"icon mr-2"}/>
                            <span className={"icon-span"}>{this.props.recipe.people} people</span>
                        </div>
                        <div className={"col-6 d-flex justify-content-end"}>
                            <span className={"stars-span my-auto mr-1"}>{this.props.recipe.rate}</span>
                            <ReactStars classNames={"stars"}
                                        count={5}
                                // onChange={this.ratingChanged}
                                        size={24}
                                        activeColor="rgba(92, 184, 92, 1)"
                                        value={this.props.recipe.rate}
                            />
                        </div>
                    </div>
                    <div className={"row mt-4"}>
                        <div className={"col-12"}>
                            <div className={"row types m-0"}>
                                {
                                    this.props.recipe.types?.map((item, index) => {
                                        return (
                                            <div className={"col-4 py-2 color-gray-lighter"}>
                                                {this.props.recipe.types[index]}
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className={"row mt-4 mb-4"}>
                        <div className={"col-12 d-flex justify-content-end"}>
                            <Link
                                onClick={() => this.showModal('Did you had this meal today?', 'success', 'healthyToday')}>
                                <FontAwesomeIcon icon={faUtensils} className={this.state.healthyIcon}/>
                            </Link>
                            <Link
                                onClick={() => this.showModal('Do you want to delete the recipe?', 'danger', 'delete')}>
                                <FontAwesomeIcon icon={faTimesCircle} className={"icon icon-actions mr-2 text-danger"}/>
                            </Link>
                            <Link onClick={() => this.props.onEdit(this.props.recipe.id)}
                                  to={`/recipes/edit/${this.props.recipe.id}`}>
                                <FontAwesomeIcon icon={faEdit} className={"icon icon-actions mr-2"}/>
                            </Link>
                            <Link onClick={this.saveRecipe}>
                                <FontAwesomeIcon icon={this.state.saveIcon} className={"icon icon-actions mr-2"}/>
                            </Link>
                            <Question show={this.state.show} handleClose={this.hideModal}
                                      question={this.state.question} color={this.state.color}
                                      action={this.state.action}>
                            </Question>
                        </div>
                    </div>
                    <div className={"row calories"}>
                        <div className={"col-6"}>
                            <span>Calories per person</span>
                        </div>
                        <div className={"col-6"}>
                            <span> {this.props.recipe.calories}</span>
                        </div>
                    </div>
                </div>

                {/*part2*/}
                <div className={"col-sm-12 col-md-6 mt-4"}>
                    <h5>Ingredients</h5>
                    <ul className="list-group">
                        {
                            this.props.recipe.ingredients?.map((item, index) => {
                                return (
                                    <li className="list-group-item">{item}</li>
                                );
                            })
                        }
                    </ul>
                </div>
                <div className={"col-sm-12 col-md-6 mt-4"}>
                    <h5>Preparation</h5>
                    <p>
                        {this.props.recipe.preparation}
                    </p>
                </div>
            </div>
        );
    };


}

export default withRouter(RecipeView);