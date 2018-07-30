import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';



import {
  postNewDelivery
} from '../../actions';

class NewDeliveries extends Component {
  constructor(){
    super()

    this.state = {
      deliveryName:'',
      deliveryDate:moment().format('YYYY-MM-DD'),
      deliveryDriver:'Select Driver',
      deliveryDriverID:null
    }
    
    this.handleDelDate = this.handleDelDate.bind(this)
    this.submit = this.submit.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleDelName = this.handleDelName.bind(this)

  }

  dropdown() {
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

  handleSelect(e){
    this.setState({
      deliveryDriverID: parseInt(e.target.value, 10)
    })
  }

  submit(e){
    e.preventDefault()
    let delivery = {
      deliveryName:this.state.deliveryName,
      deliveryDate:this.state.deliveryDate,
      deliveryDriver:this.state.deliveryDriver,
      deliveryDriverID:this.state.deliveryDriverID
    }
    this.props.postNewDelivery(delivery, ()=>{
      this.props.changeTab('allDel')
    });
    
  }

  handleDelDate(e){
    this.setState({
      deliveryDate:e.target.value
    })
  }

  handleDelName(e){
    this.setState({
      deliveryName:e.target.value
    })
  }

  render() {
    return (
      <div>
        <h4>New Deliveries</h4>
        <form>
          <div className="form-group">
            <div className="row">
              <div className="col-2">
                <label>Date: </label>
              </div>
              <div className="col-10">
                <FormControl value={this.state.deliveryDate} id="deliveryDate" onChange={this.handleDelDate} type="date" />
              </div>
            </div>
          </div> 

          <div className="form-group">
            <div className="row">
              <div className="col-2">
                <label>Date: </label>
              </div>
              <div className="col-10">
                <FormControl  value={this.state.deliveryName} id="deliveryName" onChange={this.handleDelName} type="text" placeholder="Delivery Name"/>
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="row">
              <div className="col-2">
                <label>Driver: </label>
              </div>
              <div className="dropdown">
                <select onChange={this.handleSelect.bind(this)} className="dropdown-toggle"   >
                  <option>Please Select ...</option>
                  {this.dropdown()}
                </select>
              </div>
            </div>
          </div>
          <button className="btn btn-outline-primary" type="submit" onClick={this.submit}>Create Delivery</button>
        </form>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({ postNewDelivery }, dispatch)
}

function mapStateToProps({drivers}){
  return { drivers }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewDeliveries);