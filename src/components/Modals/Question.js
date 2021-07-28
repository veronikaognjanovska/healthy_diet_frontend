import React from 'react';
import './Modals.css';

const Question = ({handleClose, show, question, color, action}) => {

    const showHideClassName = show ? 'my-modal d-block' : 'my-modal d-none';
    const buttonClass = 'col-5 btn btn-'+color;

    return (
        <div className={showHideClassName} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className={"modal-content p-3"}>
                    <div className={"modal-header border-0"}>
                        <h5 className={"modal-title mx-auto my-0 text-dark"}>{question}</h5>
                        <button className={"m-0 p-0 close text-dark float-right"} type={"button"} onClick={handleClose}
                                aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className={"modal-body pb-0 text-center"}>

                    </div>
                    <div className={"modal-footer border-0 d-flex justify-content-center"}>
                        <button type={"button"} className={buttonClass} data-dismiss="modal"
                                onClick={()=>handleClose(action)}>{color==='success'?'Yes':'No'}
                        </button>
                        <button type={"button"} className={"col-5 btn btn-secondary"} data-dismiss="modal"
                                onClick={handleClose}>Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Question;