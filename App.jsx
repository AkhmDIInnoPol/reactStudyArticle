import React from 'react';


class InputData extends React.Component {

  inputLabels : {
     header: "Header"
  }



  constructor(props){
    super(props);

    this.state = {
      header: ""
    }


  }

  headerChanged(event){
      this.state.header = event.target.value;
      // console.log(event.target.value));
  };

   render() {
      return (

			<div>
          <div>
            <label className="labels">{this.props.header}</label>
            <input type="text" ></input>
          </div>

          <div>
            <label className="labels">Author:</label>
            <input type="text"></input>
          </div>

          <div>
            <label className="labels">Text:</label>
            <input type="text"></input>
          </div>
			</div>

      );
   }
}


class Article extends React.Component {
  render(){
    return(
        <div>

        </div>


    );
  }
}

export default InputData;
