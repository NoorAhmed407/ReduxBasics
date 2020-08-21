import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import anotherName from './actions/changeName';


function App(props) {
  
  return (
    <div className="App">
        <h1>{props.myname}</h1>
        <button onClick={()=>{props.changeName('Sir Faraz')}}>Change It</button>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    myname: state.name 
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    changeName: (name)=>{dispatch(anotherName(name))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
