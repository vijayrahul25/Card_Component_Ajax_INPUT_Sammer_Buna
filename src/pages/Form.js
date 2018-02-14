import React from "react";

class Form extends React.Component {
  state = { userName: "First" };

  handleSubmit = event => {
    event.preventDefault();
    //console.log('form submited' + this.state.userName);
    fetch(`https://api.github.com/users/${this.state.userName}`)
      .then(resp => {
        if (resp.status === 200) {
          return resp.json();
        }
      })
      .then(responseData => {
        if (responseData) {
          this.props.AddNewAppCard(responseData);
        }
      })
      .catch(function() {
        console.log("no data found");
      });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.userName}
            onChange={event => this.setState({ userName: event.target.value })}
            placeholder="Github User"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
