import React, { Component } from 'react'; 
import { connect } from 'react-redux';

class Alldeliveries extends Component {

    constructor(){
        super()
        this.state = {
            drivers:null,
            deliveries:null
        }
    }

    componentWillMount() {
        let arrayOfDrivers = []
        const newItems = Object.keys(this.props.drivers)
        newItems.map((i) => {
            arrayOfDrivers.push({name:this.props.drivers[i].name, ID: i})
        })

        this.setState({
            deliveries: this.props.deliveries,
            drivers: arrayOfDrivers
        })
    }

    componentWillReceiveProps(nextProps) {
        let nextArrayOfDrivers = [];
        const newItems = Object.keys(nextProps.drivers)
        newItems.map((i) => {
            nextArrayOfDrivers.push({name:nextProps.drivers[i].name, ID: parseInt(i, 10)})
        })

       
        this.setState({
            deliveries: nextProps.deliveries,
            drivers: nextArrayOfDrivers
        });
    }
    
    editDelTab(id){
        this.props.changeTab('editDel', id)
    }

    deleteDelTab(id){
        this.props.changeTab('deleteDel', id)
    }

    deleteDelivery(id){
        this.props.deleteDelivery(id)
        this.toggleDelete(false)
    }

    renderDriver(DriverID) {
        return this.state.drivers.map((driver, i) => {
           if(driver.ID === DriverID){
                return (
                    <span key={i}>{driver.name}</span>
                )
            }
        })
    }

    showSingleDelivery(id){
        this.props.changeTab('singleDel', id)
    }

    renderDeliveries(){
        const items = Object.keys(this.state.deliveries)
        return items.map((i) => {
   
            return (
                <tr key={i} className="delWindow">
                    <th scope="row" onClick={()=>{this.showSingleDelivery(i)} }> ID: {i} </th>
                    <td onClick={()=>{this.showSingleDelivery(i)} }>Date: {this.state.deliveries[i].date} </td>
                    <td onClick={()=>{this.showSingleDelivery(i)} }>Name: {this.state.deliveries[i].name} </td>
                    <td onClick={()=>{this.showSingleDelivery(i)} }>Driver: {this.renderDriver(this.state.deliveries[i].driver_id)} </td>
                    <td className="text-right">
                        <button style={{marginRight:'5px'}}className="btn btn-outline-primary" onClick={() => this.editDelTab(i)}>Edit</button> 
                        <button className="btn btn-outline-danger" onClick={() => this.deleteDelTab(i)} >Delete</button>
                    </td> 
                </tr >
            )
        })
    }

    render() {
        return (
            
            <div>
                <h2>Deliveries</h2>
                <table className="table">
                    <tbody>
                        <tr>
                            <td>#</td>
                            <td>Date</td>
                            <td>Delivery</td>
                            <td></td>
                        </tr >
                            {this.renderDeliveries()}
                        <tr>
                        </tr>
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


export default connect(mapStateToProps)(Alldeliveries);