import React from 'react';
import {Link} from "react-router-dom";
import recipe from "../../../assets/Screenshot_6.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle, faMinusCircle} from "@fortawesome/free-solid-svg-icons";
import '../Recipes.css';

class RecipeEdit extends React.Component {

    static ingredients = ["0"];

    constructor(props) {
        super(props);
        this.state = {
            ingredients: [],
            fileData:null
        }
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        var title = document.getElementById("title").value;
        var time = document.getElementById("time").value;
        var people = document.getElementById("people").value;
        var list = this.getCheckBoxListValues();
        var calories = document.getElementById("calories").value;
        var preparation = document.getElementById("preparation").value;

        // const name = formData.name !== "" ? formData.name : props.book.name;
        // const category = formData.category !== -1 ? formData.category : props.book.category;
        // const author = formData.author !== -1 ? formData.author.id : props.book.author.id;
        // const availableCopies = props.book.availableCopies;
        //
        // props.onEditBook(props.book.id, name, category, author, availableCopies);
        // history.push("/books");
        console.log(title);
        console.log(time);
        console.log(people);
        console.log(list);
        console.log(calories);
        console.log(RecipeEdit.ingredients);
        console.log(preparation);

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

    static removeIngredient = (index) => {
        var ingredient = document.getElementById("ingredient" + index).innerText;
        RecipeEdit.ingredients = RecipeEdit.ingredients.filter((a) => a !== ingredient);
        // this.setState({});
    }

    preview = (event) => {
        this.setState({
            fileData:event.target.files[0]
        });
    }

    upload = () => {
        console.log("----------------------")
        console.log(this.state.fileData)
    }


    render() {
        return (
            <div className={"row px-4"}>
                <div className={"col-12 d-flex justify-content-center mt-3 mb-3"}>
                    <h4>Recipe</h4>
                </div>
                <div className={"col-12 back"}>
                    <Link className={"btn btn-success float-left py-1 px-2"}
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
                                   placeholder={this.props.recipe?.title}
                                // onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Recipe Image</label>
                            <input type="file"
                                   accept="image/png, image/gif, image/jpeg"
                                   className="form-control"
                                   id="image"
                                   name="image"
                                   placeholder={this.props.recipe?.title}
                                   onChange={this.preview}
                            />
                        </div>
                        <div className="form-group">
                            <Link className={"btn btn-success float-left py-1 px-2 w-100 mb-2"}
                                  onClick={this.upload}
                            >Upload</Link>
                        </div>
                        <div className="form-group">
                            <img className={"recipe-image"} src={recipe} alt="recipe image"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">Time to prepare</label>
                            <input type="text"
                                   className="form-control"
                                   id="time"
                                   name="time"
                                   placeholder={this.props.recipe?.title}
                                // onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">No. of people</label>
                            <input type="text"
                                   className="form-control"
                                   id="people"
                                   name="people"
                                   placeholder={this.props.recipe?.title}
                                // onChange={handleChange}
                            />
                        </div>
                        <div className="form-group d-flex justify-content-center color-gray-lighter">
                            <div className={"w-25 d-inline"}>
                                <div className={"d-block"}>
                                    <input type="checkbox" id="type" name="type" value="Breakfast"/>
                                    <label htmlFor="type">Breakfast</label>
                                </div>
                                <div className={"d-block"}>
                                    <input type="checkbox" id="type" name="type" value="Lunch"/>
                                    <label htmlFor="type">Lunch</label>
                                </div>
                                <div className={"d-block"}>
                                    <input type="checkbox" id="type" name="type" value="Diner"/>
                                    <label htmlFor="type">Diner</label>
                                </div>
                                <div className={"d-block"}>
                                    <input type="checkbox" id="type" name="type" value="Snack"/>
                                    <label htmlFor="type">Snack</label>
                                </div>
                                <br/>
                                <div className={"d-block"}>
                                    <input type="checkbox" id="type" name="type" value="Easy"/>
                                    <label htmlFor="type">Easy</label>
                                </div>
                                <div className={"d-block"}>
                                    <input type="checkbox" id="type" name="type" value="Medium"/>
                                    <label htmlFor="type">Medium</label>
                                </div>
                                <div className={"d-block"}>
                                    <input type="checkbox" id="type" name="type" value="Hard"/>
                                    <label htmlFor="type">Hard</label>
                                </div>
                            </div>
                            <div className={"w-25 d-inline"}>
                                <div className={"d-block"}>
                                    <input type="checkbox" id="type" name="type" value="Traditional"/>
                                    <label htmlFor="type">Traditional</label>
                                </div>
                                <div className={"d-block"}>
                                    <input type="checkbox" id="type" name="type" value="Vegetarian"/>
                                    <label htmlFor="type">Vegetarian</label>
                                </div>
                                <div className={"d-block"}>
                                    <input type="checkbox" id="type" name="type" value="Vegan"/>
                                    <label htmlFor="type">Vegan</label>
                                </div>
                                <div className={"d-block"}>
                                    <input type="checkbox" id="type" name="type" value="Mediterian"/>
                                    <label htmlFor="type">Mediterian</label>
                                </div>
                                <div className={"d-block"}>
                                    <input type="checkbox" id="type" name="type" value="Paleo"/>
                                    <label htmlFor="type">Paleo</label>
                                </div>
                                <div className={"d-block"}>
                                    <input type="checkbox" id="type" name="type" value="Pescaterian"/>
                                    <label htmlFor="type">Pescaterian</label>
                                </div>
                                <div className={"d-block"}>
                                    <input type="checkbox" id="type" name="type" value="Keto"/>
                                    <label htmlFor="type">Keto</label>
                                </div>
                                <div className={"d-block"}>
                                    <input type="checkbox" id="type" name="type" value="Lactose free"/>
                                    <label htmlFor="type">Lactose free</label>
                                </div>
                                <div className={"d-block"}>
                                    <input type="checkbox" id="type" name="type" value="Gluten free"/>
                                    <label htmlFor="type">Gluten free</label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Calories</label>
                            <input type="text"
                                   className="form-control"
                                   id="calories"
                                   name="calories"
                                   placeholder={this.props.recipe?.title}
                                // onChange={handleChange}
                            />
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
                                                    // onClick={function(i){RecipeEdit.removeIngredient(index)}(index)}
                                                    // onClick={this.sendCred1(index) }
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
                                            onClick={this.addIngredient}
                                        // onClick={function(){RecipeEdit.addIngredient()}}
                                    >
                                        <FontAwesomeIcon icon={faPlusCircle} className={"text-success"}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={"col-sm-12 col-md-6 mt-4"}>
                            <h5>Preparation</h5>
                            <textarea id={"preparation"} className={"w-100"} rows="10"></textarea>
                        </div>
                    </div>
                    <div className="form-group">
                        <button id="submit" type="submit"
                                className={"btn btn-success float-left py-1 px-2 w-100 my-2"}>Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    };


}

export default RecipeEdit;