import React, { Component } from 'react';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchDeliveries, fetchDrivers } from "./actions";
import './App.css'

import Alldeliveries from './components/deliveriesComponents/Alldeliveries';
import Editdeliveries from './components/deliveriesComponents/Editdeliveries';
import NewDeliveries from './components/deliveriesComponents/NewDeliveries';
import DeleteDelivery from './components/deliveriesComponents/DeleteDelivery';
import SingleDelivery from './components/deliveriesComponents/SingleDelivery';
import AllDrivers from './components/driversComponents/AllDrivers';

class App extends Component {
  constructor(){
    super()

    this.handleSelect = this.handleSelect.bind(this)
  }
  state={
    pageTab:'allDel',
    activeDeliveryId:null
  }

  componentDidMount(){
    this.props.fetchDeliveries()
    this.props.fetchDrivers()
  }

  handleSelect(tab, id){
    this.setState({
      pageTab:tab,
      activeDeliveryId:parseInt(id, 10)
    })
  }

  renderPage(){
    if(this.state.pageTab === 'allDel'){
      this.props.fetchDeliveries()
      return(
        <Alldeliveries changeTab={this.handleSelect}/>
      )
    }
    
    if(this.state.pageTab === 'editDel'){
      
      return(
        <Editdeliveries 
          delId={this.state.activeDeliveryId} 
          changeTab={this.handleSelect}
        />
      )
    }
    if(this.state.pageTab === 'newDel'){
      return(
        <NewDeliveries changeTab={this.handleSelect}/>
      )
    }

    if(this.state.pageTab === 'singleDel'){
      return(
        <SingleDelivery 
          changeTab={this.handleSelect}
          delId={this.state.activeDeliveryId}
        />
      )
    }

    if(this.state.pageTab === 'deleteDel'){
      return(
        <DeleteDelivery 
          delId={this.state.activeDeliveryId} 
          changeTab={this.handleSelect}
        />
      )
    }

    if(this.state.pageTab === 'drivers'){
      return(
        <AllDrivers changeTab={this.handleSelect}/>
      )
    }
  }

  render(){
    return(
      <div>
        <header className="header clearfix">
          <nav className="float-left">
            <a className="navbar-brand" href="#" onClick={()=>this.handleSelect('allDel')}>CartonCloud</a>
          </nav>
          <nav >
            <ul className="nav nav-pills float-right">
             <li className="nav-item">
                <a className="nav-link" href="#" onClick={()=>this.handleSelect('drivers')}>Drivers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={()=>this.handleSelect('allDel')}>Deliveries</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={()=>this.handleSelect('newDel')}>New Delivery</a>
              </li>
            </ul> 
          </nav>   
          
        </header>
        <hr/>
        

          {this.renderPage()}
      </div>  
    );
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchDeliveries, fetchDrivers }, dispatch)
}

export default connect(null, mapDispatchToProps)(App);

