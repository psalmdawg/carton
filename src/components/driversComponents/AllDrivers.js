import React, { Component } from 'react'
import {connect} from 'react-redux';

class AllDrivers extends Component {
  state = {
    drivers:null,
    showDeliveries:false,
    activeDriver:null
  }

  componentDidMount(){
    this.setState({
      drivers: this.props.drivers,
      deliveries: this.props.deliveries
    })
  }

  renderDriverDeliveries(key){
    console.log('render driver deliveries', key)
    this.setState({
      activeDriver:key,
      showDeliveries:true
    })
  }

  renderAllDriverDeliveries(){

    let id = this.state.activeDriver;
    var keys = Object.keys(this.state.deliveries);
    let arrayOfDeliveries = [];

    keys.map((key)=>{
      if(this.state.deliveries[key].driver_id == id){
        arrayOfDeliveries.push(this.state.deliveries[key])
      }
    })
    console.log('array of deliveries',arrayOfDeliveries)
    if(arrayOfDeliveries.length < 1){
      return(
        <h6>No deliveries Scheduled</h6>
      )
    }

    return arrayOfDeliveries.map((del)=>{
      return(
        <div key={del} className='singleDelRender'>
          <div className='singleDelRenderName'>Delivery Name: {del.name}</div>
          <div className='singleDelRenderDate'>Delivery Date: {del.date}</div>
          
        </div> 
      )
    })      
  }


  renderDrivers(){
    const items = Object.keys(this.state.drivers)
      return items.map((i)=>{
        return (        
          <a href="#" className="list-group-item list-group-item-action" key={i} onClick={()=>{this.renderDriverDeliveries(i)}}>{this.state.drivers[i].name}</a>       
        )
      })  
  }

  render() {


    return (
      <div>
        <h4>All drivers - click to view their deliveries.</h4>
        <div className="list-group">
          {this.state.drivers && this.renderDrivers()}
        </div>
       
        <div style={{marginTop:'30px'}}>
          {this.state.showDeliveries && <h4>All {this.state.drivers[this.state.activeDriver].name} Deliveries</h4>}
          <div className="list-group">
            {this.state.showDeliveries && this.renderAllDriverDeliveries()}
            
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
    const { deliveries, drivers } = state;
    return { deliveries, drivers };
};

export default connect(mapStateToProps)(AllDrivers)