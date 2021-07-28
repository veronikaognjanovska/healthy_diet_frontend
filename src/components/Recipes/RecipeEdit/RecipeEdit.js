import React from 'react';
import {Link, withRouter} from "react-router-dom";
import recipe from "../../../assets/Screenshot_6.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle, faMinusCircle} from "@fortawesome/free-solid-svg-icons";
import '../Recipes.css';
import {faClock, faUser} from "@fortawesome/free-regular-svg-icons";
import RecipeService from "../../../service/RecipeService";

class RecipeEdit extends React.Component {

    static ingredients = ["0"];

    constructor(props) {
        super(props);
        RecipeEdit.ingredients = this.props.recipe?.ingredients ? this.props.recipe.ingredients : [];
        this.state = {
            ingredients: [],
            fileData: null,
            fileImage: null,
            title: this.props.recipe?.title ? this.props.recipe?.title : '',
            time: this.props.recipe?.time ? this.props.recipe?.time : '',
            people: this.props.recipe?.people ? this.props.recipe?.people : '',
            types: this.props.recipe?.types ? this.props.recipe?.types : [],
            calories: this.props.recipe?.calories ? this.props.recipe?.calories : '',
        }
    }

    static removeIngredient = (index) => {
        var ingredient = document.getElementById("ingredient" + index).innerText;
        RecipeEdit.ingredients = RecipeEdit.ingredients.filter((a) => a !== ingredient);
        // this.setState({});
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        var title = document.getElementById("title").value;
        var time = document.getElementById("time").value;
        var people = document.getElementById("people").value;
        var types = this.getCheckBoxListValues();
        var calories = document.getElementById("calories").value;
        var preparation = document.getElementById("preparation").value;
        var ingredients = RecipeEdit.ingredients;

        // const name = formData.name !== "" ? formData.name : props.book.name;
        // const category = formData.category !== -1 ? formData.category : props.book.category;
        // const author = formData.author !== -1 ? formData.author.id : props.book.author.id;
        // const availableCopies = props.book.availableCopies;
        //
        // props.onEditBook(props.book.id, name, category, author, availableCopies);
        // history.push("/books");
        // console.log(title);
        // console.log(time);
        // console.log(people);
        // console.log(types);
        // console.log(calories);
        // console.log(RecipeEdit.ingredients);
        // console.log(preparation);
        // console.log("submit")
        const data = {
            title, time, people, types, calories, preparation, ingredients
        };
        console.log(data)
        if (this.props.recipe.id) {
            RecipeService.editRecipe(this.props.recipe.id, data)
                .then((data) => {
                    this.props.onSubmit(data.data.id);
                    this.props.history.push(`/recipes/view/${data.data.id}`);
                })
        } else {
            RecipeService.addRecipe(data)
                .then((data) => {
                    this.props.onSubmit(data.data.id);
                    this.props.history.push(`/recipes/view/${data.data.id}`);
                })
        }
    }

    getCheckBoxListValues = () => {
        var list = [];
        var options = document.getElementsByName('type');
        for (var i = 0; i < options.length; i++) {
            if (options[i].checked) {
                list.push(options[i].value);
            }
        }
        return list;
    }

    addIngredient = () => {
        var ingredient = document.getElementById("addIngredientInput").value;
        if (ingredient.trim() !== "") {
            RecipeEdit.ingredients.push(ingredient);
            this.setState({});
        }

    }

    preview = (event) => {
        this.setState({
            fileData: event.target.files[0],
            fileImage: URL.createObjectURL(event.target.files[0])
        });
    }

    upload = () => {
        console.log("upload")
    }


    render() {
        return (
            <div className={"row px-4"}>
                <div className={"col-12 d-flex justify-content-center mt-3 mb-3"}>
                    <h4>Recipe</h4>
                </div>
                <div className={"col-12 back"}>
                    <Link className={"btn btn-success btn-green float-left py-1 px-2"}
                          to={`/recipes/view/${this.props.recipe.id}`}>Back</Link>
                </div>
                <form onSubmit={this.onFormSubmit} className={"w-100"}>
                    {/*part1*/}
                    <div className={"form-part-1 m-auto"}>
                        <div className="form-group">
                            <label htmlFor="name">Recipe Title</label>
                            <input type="text"
                                   className="form-control"
                                   id="title"
                                   name="title"
                                   value={this.state.title}
                                   onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Recipe Image</label>
                            <input type="file"
                                   accept="image/png, image/gif, image/jpeg"
                                   className="form-control"
                                   id="image"
                                   name="image"
                                   onChange={this.preview}
                            />
                        </div>
                        <div className="form-group">
                            <Link className={"btn btn-success btn-green float-left py-1 px-2 w-100 mb-2"}
                                  onClick={this.upload}
                            >Upload</Link>
                        </div>
                        <div className="form-group">
                            {
                                this.state.fileData !== null &&
                                <img className={"recipe-image"} src={this.state.fileImage} alt="recipe image"/>
                            }
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">Time to prepare</label>
                            <div className="input-group">
                                <div className={"input-group-prepend"}>
                                    <button type={"button"} id={"btn"} className={"input-group-text"} disabled={"true"}>
                                        <FontAwesomeIcon icon={faClock} className={"text-white"}/>
                                    </button>
                                </div>
                                <input type="text"
                                       className="form-control"
                                       id="time"
                                       name="time"
                                       value={this.state.time}
                                       onChange={this.onChange}
                                />
                                <div className={"input-group-append"}>
                                    <button type={"button"} id={"btn"} className={"input-group-text"} disabled={"true"}>
                                        min
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">No. of people</label>
                            <div className="input-group">
                                <div className={"input-group-prepend"}>
                                    <button type={"button"} id={"btn"} className={"input-group-text"} disabled={"true"}>
                                        <FontAwesomeIcon icon={faUser} className={"text-white"}/>
                                    </button>
                                </div>
                                <input type="text"
                                       className="form-control"
                                       id="people"
                                       name="people"
                                       value={this.state.people}
                                       onChange={this.onChange}
                                />
                                <div className={"input-group-append"}>
                                    <button type={"button"} id={"btn"} className={"input-group-text"} disabled={"true"}>
                                        people
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="form-group d-flex justify-content-center color-gray-lighter">
                            <div className={"w-25 d-inline"}>
                                <div className={"d-block"}>
                                    <input type="checkbox" id="type" name="type" value="Breakfast"
                                           defaultChecked={this.state.types.includes("Breakfast")}/>
                                    <label htmlFor="type">Breakfast</label>
                                </div>
                                <div className={"d-block"}>
                                    <input type="checkbox" id="type" name="type" value="Lunch"
                                           defaultChecked={this.state.types.includes("Lunch")}/>
                                    <label htmlFor="type">Lunch</label>
                                </div>
                                <div className={"d-block"}>
                                    <input type="checkbox" id="type" name="type" value="Diner"
                                           defaultChecked={this.state.types.includes("Diner")}/>
                                    <label htmlFor="type">Diner</label>
                                </div>
                                <div className={"d-block"}>
                                    <input type="checkbox" id="type" name="type" value="Snack"
                                           defaultChecked={this.state.types.includes("Snack")}/>
                                    <label htmlFor="type">Snack</label>
                                </div>
                                <br/>
                                <div className={"d-block"}>
                                    <input type="checkbox" id="type" name="type" value="Easy"
                                           defaultChecked={this.state.types.includes("Easy")}/>
                                    <label htmlFor="type">Easy</label>
                                </div>
                                <div className={"d-block"}>
                                    <input type="checkbox" id="type" name="type" value="Medium"
                                           defaultChecked={this.state.types.includes("Medium")}/>
                                    <label htmlFor="type">Medium</label>
                                </div>
                                <div className={"d-block"}>
                                    <input type="checkbox" id="type" name="type" value="Hard"
                                           defaultChecked={this.state.types.includes("Hard")}/>
                                    <label htmlFor="type">Hard</label>
                                </div>
                            </div>
                            <div className={"w-25 d-inline"}>
                                <div className={"d-block"}>
                                    <input type="checkbox" id="type" name="type" value="Traditional"
                                           defaultChecked={this.state.types.includes("Traditional")}/>
                                    <label htmlFor="type">Traditional</label>
                                </div>
                                <div className={"d-block"}>
                                    <input type="checkbox" id="type" name="type" value="Vegetarian"
                                           defaultChecked={this.state.types.includes("Vegetarian")}/>
                                    <label htmlFor="type">Vegetarian</label>
                                </div>
                                <div className={"d-block"}>
                                    <input type="checkbox" id="type" name="type" value="Vegan"
                                           defaultChecked={this.state.types.includes("Vegan")}/>
                                    <label htmlFor="type">Vegan</label>
                                </div>
                                <div className={"d-block"}>
                                    <input type="checkbox" id="type" name="type" value="Mediterian"
                                           defaultChecked={this.state.types.includes("Mediterian")}/>
                                    <label htmlFor="type">Mediterian</label>
                                </div>
                                <div className={"d-block"}>
                                    <input type="checkbox" id="type" name="type" value="Paleo"
                                           defaultChecked={this.state.types.includes("Paleo")}/>
                                    <label htmlFor="type">Paleo</label>
                                </div>
                                <div className={"d-block"}>
                                    <input type="checkbox" id="type" name="type" value="Pescaterian"
                                           defaultChecked={this.state.types.includes("Pescaterian")}/>
                                    <label htmlFor="type">Pescaterian</label>
                                </div>
                                <div className={"d-block"}>
                                    <input type="checkbox" id="type" name="type" value="Keto"
                                           defaultChecked={this.state.types.includes("Keto")}/>
                                    <label htmlFor="type">Keto</label>
                                </div>
                                <div className={"d-block"}>
                                    <input type="checkbox" id="type" name="type" value="Lactose free"
                                           defaultChecked={this.state.types.includes("Lactose free")}/>
                                    <label htmlFor="type">Lactose free</label>
                                </div>
                                <div className={"d-block"}>
                                    <input type="checkbox" id="type" name="type" value="Gluten free"
                                           defaultChecked={this.state.types.includes("Gluten free")}/>
                                    <label htmlFor="type">Gluten free</label>
                                </div>
                            </div>
                        </div>
                        <div className="input-group">
                            <input type="text"
                                   className="form-control"
                                   id="calories"
                                   name="calories"
                                   value={this.state.calories}
                                   onChange={this.onChange}
                            />
                            <div className={"input-group-append"}>
                                <button type={"button"} id={"btn"} className={"input-group-text"} disabled={"true"}>
                                    Calories
                                </button>
                            </div>
                        </div>
                    </div>

                    {/*part2*/}
                    <div className="row">
                        <div className={"col-sm-12 col-md-6 mt-4 form-part-2"}>
                            <h5>Ingredients</h5>
                            <ul className="list-group mb-3">
                                {
                                    RecipeEdit.ingredients?.map((item, index) => {
                                        return (
                                            <li className={"list-group-item p-2"}>
                                                <div className={"d-inline-block"} id={"ingredient" + index}>{item}</div>
                                                <button type={"button"} className={"btn float-right text-danger p-0"}
                                                        onClick={function () {
                                                            RecipeEdit.removeIngredient(index)
                                                        }}
                                                        id={"btn" + index}>
                                                    <FontAwesomeIcon icon={faMinusCircle}/>
                                                </button>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                            <div className={"input-group mb-3 form-part-2"}>
                                <input type="text" id="addIngredientInput" className="form-control"/>
                                <div className={"input-group-append"}>
                                    <button type={"button"} id={"btn"} className={"input-group-text"}
                                            onClick={this.addIngredient}>
                                        <FontAwesomeIcon icon={faPlusCircle} className={"text-success"}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={"col-sm-12 col-md-6 mt-4"}>
                            <h5>Preparation</h5>
                            <textarea id={"preparation"} className={"w-100"} rows="10"
                                      defaultValue={this.props.recipe?.preparation}>

                            </textarea>
                        </div>
                    </div>
                    <div className="form-group">
                        <button id="submit" type="submit"
                                className={"btn btn-success btn-green float-left py-1 px-2 w-100 my-2"}>Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    };


}

export default withRouter(RecipeEdit);