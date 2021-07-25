import React from 'react';
import {Link} from 'react-router-dom';
import recipe from "../../../assets/Screenshot_6.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faUser} from "@fortawesome/free-regular-svg-icons";
import ReactStars from "react-rating-stars-component";
import './RecipeComponent.css';

const RecipeComponent = (props) => {
    return (
        <div className={"col-md-3 col-sm-12 recipe"}>
            <div className={"row"}>
                <div className={"col-12 d-flex justify-content-center"}>
                    <img className={"recipe-image"} src={recipe} alt="recipe image"/>
                </div>
                <div className={"col-12 d-flex justify-content-center mt-3"}>
                    <h4>{props.term.title}</h4>
                </div>
                <div className={"col-12"}>
                    <div className={"row"}>
                        <div className={"col-3 pr-0"}>
                            <FontAwesomeIcon icon={faClock} className={"icon mr-2"}/>
                            <span className={"icon-span"}>{props.term.time} min</span>
                        </div>
                        <div className={"col-3 pr-0"}>
                            <FontAwesomeIcon icon={faUser} className={"icon mr-2"}/>
                            <span className={"icon-span"}>{props.term.people} people</span>
                        </div>
                        <div className={"col-6 d-flex justify-content-end"}>
                            <span className={"stars-span my-auto mr-1"}>{props.term.rate}</span>
                            <ReactStars classNames={"stars"}
                                        count={5}
                                // onChange={this.ratingChanged}
                                        size={24}
                                        activeColor="rgba(92, 184, 92, 1)"
                                        value={props.term.rate}
                            />
                        </div>
                    </div>
                </div>
                <div className={"col-12"}>
                    <div className={"row types m-0"}>
                        {props.term.types?.map((item, index) => {
                            return (
                                <div className={"col-4"}>
                                    {props.term.types[index]}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className={"col-12 mt-2"}>
                    <Link className={"col-12 btn btn-outline-success"}
                          onClick={() => props.onViewDetails(props.term.id)}
                          to={`/recipes/view/${props.term.id}`}>
                        View details</Link>
                </div>
            </div>
        </div>
    );
}

export default RecipeComponent;