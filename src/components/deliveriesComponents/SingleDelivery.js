import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

class SingleDelivery extends Component {
    cancel(){
        this.props.changeTab('allDel')
      }

    edit(){
        this.props.changeTab('editDel', this.props.delId)
    }  

    render() {
        const delId = this.props.delId;
        console.log()
        return (
        <div>
            View Delivery
            <table>
                <tbody>
                    <tr className="delWindow">
                        <td>ID: {this.props.delId} </td>
                        <td>Date: {this.props.deliveries[delId].date} </td>
                        <td>Name: {this.props.deliveries[delId].name} </td>
                        <td>Driver: {this.props.drivers[this.props.deliveries[delId].driver_id].name} </td>
                        <td><Button className="ff" bsStyle="info" bsSize="xsmall" onClick={this.edit.bind(this)}>Edit</Button> </td> 
                        <td><Button className="ffqq" bsStyle="success" bsSize="xsmall" onClick={this.cancel.bind(this)} >Back</Button></td> 
                    </tr >
                </tbody>    
            </table>    
            
        </div>
        )
    }
}


const mapStateToProps = (state) => {
    const { deliveries, drivers } = state;
    return { deliveries, drivers };
};

export default connect(mapStateToProps)(SingleDelivery);