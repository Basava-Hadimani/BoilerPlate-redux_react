import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as cartActions from '../../actions/cart.js'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      items  : [
        'Basavaraj',
        'Rashmi',
        'Paapu',
        'Maounu',
        'Mantu'
      ]

    }
  }


  render(){
    const resources = this.state.items.map((item, index) =>{
      return <div key = {index}>
      <div>
      <button onClick={() => {this.props.actions.addToCart(item)}}> + </button>
      {item}
        <button onClick={() => {this.props.actions.removeFromCart(item)}}> - </button>
      </div>
      </div>
    })

    const Eligible = this.props.item.map((item, index) =>{

      return(
        <div key={index}>
        {item}
        </div>
      )
    })
    return(
      <div>

      <div>Resources :</div>
      {resources}

      <div>Eligible resources</div>
      {Eligible}


      </div>
    );
  }

}


function mapStateToProps(state, props) {
    return {
        item: state.reducer1
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(cartActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
