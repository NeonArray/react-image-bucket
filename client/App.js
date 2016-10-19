import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import ImageList from "./components/ImageList";


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      images: []
    };
  }

  componentWillMount() {
    axios.get("https://api.imgur.com/3/gallery/hot/viral/0")
      .then(response => this.setState({ images: response.data.data }));
  }

  render() {
    return (
      <div className="container">
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById("app"));
});
