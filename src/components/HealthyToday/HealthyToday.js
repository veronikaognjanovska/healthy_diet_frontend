import React from 'react';
import {Link} from "react-router-dom";
import './HealthyToday.css';

class HealthyToday extends React.Component {

    static ingredients = ["0"];

    constructor(props) {
        super(props);
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        this.state = {
            date: year+"-"+month+"-"+date,
            showToday:-1,
            total: this.props.healthyData?.map(item=>item.recipeId.calories).reduce((x,z) => x + z, 0)
        }
        console.log( this.props.healthyData?.map(item=>item.recipeId.calories).reduce((x,z) => x + z, 0))
    }

    viewPast = (today) => {
        if(today===-1){
            let newDate = new Date()
            let date = newDate.getDate();
            let month = newDate.getMonth() + 1;
            let year = newDate.getFullYear();
            this.setState({
                date: year+"-"+month+"-"+date,
                showToday:-1
            });
            this.props.onViewDate();
        }else{
            let datetime = document.getElementById('datetime').value;
            this.setState({
                showToday:1,
                date:datetime
            });
            this.props.onViewDate(datetime);
        }
    }

    render() {
        return (
            <div className={"row px-4 form-part-1 mx-auto mb-5"}>
                <div className={"col-12 d-flex justify-content-center mt-3 mb-3"}>
                    <h4>HealtyToday</h4>
                </div>
                <div className={"col-12 d-flex justify-content-center mt-3 mb-3"}>
                    <h6 className={"text-center"}>{this.state.date}</h6>
                </div>
                <div className={"col-12 d-flex justify-content-center mt-3 mb-3"}>
                    <table className="table table-bordered">
                        <tbody>
                        {
                            this.props.healthyData?.map((item, index) => {
                                return (
                                    <tr>
                                        <td>{item.recipeId.title}</td>
                                        <td>{item.recipeId.calories}</td>
                                    </tr>
                                );
                            })
                        }
                        </tbody>
                    </table>
                </div>
                <div className={"col-12 d-flex justify-content-end mb-3"}>
                    <span className={"p-2"}>Total Calories</span>
                    <span className={"span-number text-white p-2"}>
                        {this.props.healthyData?.map(item=>item.recipeId.calories).reduce((x,z) => x + z, 0)}</span>
                </div>
                <div className="input-group">
                    <input type="date" name="birthday"  className="form-control" id="datetime"/>
                </div>

                <div className="col-12 p-0 mt-2">
                    <Link className={"btn btn-success btn-green float-left py-2 px-2 w-100 mb-2"}
                          onClick={this.viewPast.bind(this)}
                    >View Past</Link>
                </div>
                {
                    this.state.showToday===-1 &&
                    <div className="col-3 p-0 mt-2">
                        <Link className={"btn btn-success btn-green float-left py-2 px-2 w-100 mb-2"}
                              to={`/recipes`}>Back</Link>
                    </div>
                }
                {
                    this.state.showToday!==-1 &&
                    <div className="col-12 p-0 mt-2">
                        <Link className={"btn btn-success btn-green float-left py-2 px-2 w-100 mb-2"}
                              onClick={this.viewPast.bind(this,-1)}
                        >Healthy Today</Link>
                    </div>
                }
            </div>
        );
    };


}

export default HealthyToday;