import React from 'react';







var InputData = React.createClass({

  labels:{
     header : 'Header:',
     author : 'Author:',
     text   : 'Text:'
  },

  getInitialState: function(){
    return {
      header: "",
      author: "",
      text: ""
    };
  },


  headerChangedHandler: function(event){
     this.setState({
       header: event.target.value
     });
  },

  authorChangedHandler: function(event){
    this.setState({
      author: event.target.value
    });
  },

  textChangedHandler: function(event){
    this.setState({
        text: event.target.value
    });
  },

  render: function(){
    return(
      <div>
          <div>
            <label className="labels">{this.labels.header}</label>
            <input type="text" onChange={this.headerChangedHandler}></input>
          </div>

          <div>
            <label className="labels">{this.labels.author}</label>
            <input type="text" onChange={this.authorChangedHandler}></input>
          </div>

          <div>
            <label className="labels">{this.labels.text}</label>
            <input type="text" onChange={this.textChangedHandler}></input>
          </div>


          <div>
            <h1 className="header">{this.state.header}</h1>
          </div>
          <div className="author" >
            Author: {this.state.author}
          </div>
          <div className="text">
            {this.state.text}
          </div>
			</div>
    );
  }

});






var Article = React.createClass({
  render: function(){
    return(
      <div>
          <InputData  />
      </div>
    );
  }
});


export default InputData;
