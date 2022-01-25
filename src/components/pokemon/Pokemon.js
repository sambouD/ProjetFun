import { Axios } from "axios";
import React, { Component } from "react";

export default class Pokemon extends Component {
  state = {
    name: "",
    pokemonIndex: "",
    imageUrl: "",
  };
  async componentDidMount() {
    const { pokemonIndex } = this.props.match.params;

    // Urls for pokemon information
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
    const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`;

    // Get Pokemon Information
    const pokemonRes = await Axios.get(pokemonUrl);

    const name = pokemonRes.data.name;
    this.setState({ name });
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>Sam</h1>
      </div>
    );
  }
}
