import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FormControl } from 'react-bootstrap';
import moment from 'moment';

import {
  editDeliveries
} from '../../actions';

class Editdeliveries extends Component {
  constructor(){
    super()
    
    this.state = {
      delDate: moment().format('YYYY-MM-DD'),
      delName: '',
      delDriver:null
    }

  }

  componentWillMount(){
      this.setState({
        delDate: this.props.deliveries[this.props.delId].date,
        delName: this.props.deliveries[this.props.delId].name,
        delDriver: this.props.deliveries[this.props.delId].driver_id
      })
  }

  cancel(){
    this.props.changeTab('allDel')
  }

  handleSelect(e){
    console.log(e.target.value)
    this.setState({delDriver: parseInt(e.target.value, 10)});
  }

  displayDriversDropDown(){
    const items = Object.keys(this.props.drivers)
    return items.map((i) => {
      return (
        <option 
          className="dropdown-item" 
          href="#"
          key={i}
          value={i}
        >
          {this.props.drivers[i].name}
        </option>
      )
    });
  }

  handleChange(event) {
    var stateChange = {};
    stateChange[event.target.getAttribute('id')] = event.target.value;
    this.setState(stateChange);
  } 

  selectDriver(key){
    this.setState({
      delDriver: parseInt(key,10)
    });
  }

  submit() {
    const delivery = {
        date: this.state.delDate,
        name: this.state.delName,
        driver_id: this.state.delDriver
    }
    this.props.editDeliveries(delivery, this.props.delId, () => {
      this.props.changeTab('allDel')
    }) 
  }

  render() {
    return (
      <div>
        Delivery ID:{this.props.delId}

        <form>
          <div className="form-group">
             <div className="row">
              <div className="col-2">
                <label>Date: </label>
              </div>
              <div className="col-10">
                <FormControl
                  id="delDate"
                  type="date"
                  onChange={(e) => this.handleChange(e)} 
                  value={this.state.delDate}
                />
              </div>
            </div>
          </div>

            <div className="form-group">
              <div className="row">
                <div className="col-2">
                  <label>Name: </label>
                </div>  
                <div className="col-10">
                  <FormControl
                    id="delName"
                    type="text" 
                    onChange={(e) => this.handleChange(e)} 
                    value={this.state.delName}
                  />
                </div>
              </div>  
            </div>

            <div className="form-group">
              <div className="row">
                <div className="col-2">
                  <label>Driver: </label>
                </div> 
                <div className="col-10">
                  <div className="dropdown">
                    <select onChange={this.handleSelect.bind(this)} className="dropdown-toggle">
                      <option>Select ...</option>
                      {this.displayDriversDropDown()}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-group">
              <button style={{marginRight:'10px'}} className="btn btn-outline-danger" onClick={this.submit.bind(this)}>Submit</button>
              <button className="btn btn-outline-primary" onClick={this.cancel.bind(this)}>Cancel</button>
            </div>
            
        </form>
       
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { deliveries, drivers } = state;
  return { deliveries, drivers };
};


function mapDispatchToProps(dispatch){
  return bindActionCreators({ editDeliveries}, dispatch)
}



export default connect(mapStateToProps, mapDispatchToProps)(Editdeliveries);