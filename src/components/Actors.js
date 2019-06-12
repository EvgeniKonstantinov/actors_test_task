import React from "react";
import { dataLoader } from "./dataLoader";
class AddActor extends React.Component {
  state = {
    name: ""
  };
  onClickAdd = e => {
    const { name } = this.state;
    this.props.addActor(name);
  };
  handleChange = e => {
    this.setState({ name: e.currentTarget.value });
  };
  render() {
    const { name } = this.state;
    return (
      <form action="">
        <input
          type="text"
          id="name"
          value={name}
          onChange={this.handleChange}
        />
        <input type="button" onClick={this.onClickAdd} value="Add actor" />
      </form>
    );
  }
}

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
  addActor = name => {
    const obj = {
      name,
      url: Date.now()
    };
    const arr = [...this.state.data, obj];
    this.setState({ data: arr });
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
          <h3>Add Actor</h3>
          <AddActor addActor={this.addActor} />
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
