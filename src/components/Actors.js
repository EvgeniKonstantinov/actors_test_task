import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { dataLoader } from "./dataLoader";
const Actor = ({ actor, deleteActor }) => {
  const { name } = actor;

  return (
    <div className="block__actor">
      <p className="block__actor-Name">{name}</p>
      <button onClick={() => deleteActor(actor.url)}>delete</button>
    </div>
  );
};
class Actors extends React.Component {
  state = {
    data: []
  };
  deleteActor = key => {
    const updateArr = this.state.data.filter(actor => {
      return actor.url !== key;
    });
    this.setState({ data: updateArr });
  };
  componentDidMount() {
    dataLoader()
      .then(data => {
        this.setState({ data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const { data } = this.state;
    return (
      <main>
        <div className="main__leftblock">
          <h1>Actors</h1>
        </div>
        <div className="main__rightblock">
          {data.map(item => (
            <Actor actor={item} deleteActor={this.deleteActor} />
          ))}
        </div>
      </main>
    );
  }
}
export { Actors };
