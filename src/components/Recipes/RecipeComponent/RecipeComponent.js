import React from 'react';
import {Link} from 'react-router-dom';

const RecipeComponent = (props) => {
    return (
        <div className={""}>
            1
            <div className={""}>
                <Link className={"btn btn-outline-warning ml-2"}
                      onClick={() => props.onView(props.term.id)}
                      to={`/recipes/view/${props.term.id}`}>
                    View
                </Link>
                <Link className={"btn btn-outline-info ml-2"}
                      onClick={() => props.onEdit(props.term.id)}
                      to={`/recipes/edit/${props.term.id}`}>
                    Edit
                </Link>
            </div>
        </div>
    )
}

export default RecipeComponent;