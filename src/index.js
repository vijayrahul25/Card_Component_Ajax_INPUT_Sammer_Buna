import React from "react";
import ReactDOM from "react-dom";
import CardList from "./pages/CardList";
import Form from "./pages/Form";



class App extends React.Component {
  state= {
    cards: [      
    ]
  }

  addNewCard = (cardInfoFromAjax) => {
    console.log(cardInfoFromAjax);
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfoFromAjax)
    }));
  };
  render() {
    return (
      <div>
        <Form AddNewAppCard={this.addNewCard} />
        <CardList cards={this.state.cards}/>
      </div>
    );
  }
}
// render app component
ReactDOM.render(<App />, document.getElementById("root"));
