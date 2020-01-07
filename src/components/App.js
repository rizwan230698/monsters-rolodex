import React from "react";
import CardList from "./card-list/CardList";
import SearchBox from "./search-box/SearchBox";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { monsters: [], searchField: "" };
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  onChange(e) {
    this.setState({
      searchField: e.target.value
    });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App" style={{ textAlign: "center" }}>
        <h1
          style={{
            fontFamily: "Bigelow Rules, cursive",
            fontSize: "72px",
            color: "#0ccac4"
          }}
        >
          Monsters Rolodex
        </h1>
        <SearchBox
          onChange={this.onChange}
          placeholder="search monster"
          value={this.state.searchField}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
