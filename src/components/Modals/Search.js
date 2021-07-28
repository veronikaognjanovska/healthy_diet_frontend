import React from 'react';
import './Modals.css';
import {Form, FormControl} from 'react-bootstrap';

const Search = ({handleClose, show, onInputSearch}) => {

    const showHideClassName = show ? 'my-modal d-block' : 'my-modal d-none';

    const onInputSearch2 = () => {
        var list = [];
        var options = document.getElementsByName('type');
        for (var i = 0; i < options.length; i++) {
            if (options[i].checked) {
                list.push(options[i].value);
            }
        }
        var searchInput = document.getElementById('searchInput').value;
        onInputSearch(searchInput, list);
    }

    return (
        <div className={showHideClassName} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className={"modal-content p-3"}>
                    <div className={"modal-header border-0"}>
                        <h5 className={"modal-title mx-auto my-0"} id="exampleModalLongTitle">SEARCH</h5>
                        <button className={"m-0 p-0 close text-dark"} type={"button"} onClick={handleClose}
                                aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className={"modal-body pb-0"}>
                        <Form className="">
                            <FormControl type="text" id="searchInput" placeholder="Search" className="mr-sm-2"/>
                        </Form>
                        <div className={"form-group d-flex justify-content-center color-gray-lighter mt-3 mb-0"}>
                            <div className={"w-50 d-inline"}>
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
                            <div className={"w-50 d-inline"}>
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
                    </div>
                    <div className={"modal-footer border-0"}>
                        <button type={"button"} className={"col-12 btn btn-success"} data-dismiss="modal"
                                onClick={onInputSearch2}>Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Search;