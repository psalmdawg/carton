import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  deleteDelivery,
} from '../../actions';

class DeleteDelivery extends Component {

  deleteDelivery(){
    this.props.deleteDelivery(this.props.delId, () => {
      this.props.changeTab('allDel')
    })
  }

  cancel(){
    this.props.changeTab('allDel')
  }

  render() {
    return (
      <div>
        <h4 style={{marginTop:'100px'}}>Delete Delivery - { this.props.deliveries[this.props.delId] && this.props.deliveries[this.props.delId].name}?</h4>
        <div style={{marginTop:'50px'}}>
          <button style={{marginRight:'10px'}}className="btn btn-outline-danger" onClick={this.deleteDelivery.bind(this)}>Confirm</button>
          <button className="btn btn-outline-primary" onClick={this.cancel.bind(this)}>Cancel</button>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ deleteDelivery}, dispatch)
}

const mapStateToProps = (state) => {
  const { deliveries, drivers } = state;
  return { deliveries, drivers };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteDelivery)