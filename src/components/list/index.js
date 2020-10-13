/**
 * movieList=movies [{
 *       {id}
 *      {title}
 *      {releaseYear}
 *      }
 *      ...
 * ]
 * 
 * Servisten gelen 'movieList' i listeler
 * Kulanan: pages->movies_list
 */


import React, { Component } from "react";
import { Text, View, TouchableOpacity, AsyncStorage } from "react-native";
import PropTypes from "prop-types";
import { Actions } from "react-native-router-flux";
import { styles } from "./styles";
import {checkIfArrayIsUndefinedOrNot,extractValues} from "../../utils/"
import lang from '../../locale/tr.json'

class MovieLister extends Component {
  constructor(props) {
    super(props);
  }

  listMovies() {
    //movieList içersinden movies'i çek
    var { movies } = this.props.movieList 
    //movies'i map ile iterate et ve ekranda göster ama önce dizi boş mu kontrolet
    return checkIfArrayIsUndefinedOrNot(movies).map((value, index) => {
      return (
        
        <View key={index}>
          <Text>{value.title}</Text>
          <Text>{value.releaseYear}</Text>
        </View>
      );
    });
  }

  render() {
    
    const { title, description } = this.props.movieList;
     
    return (
      <View style={styles.container}>
      <Text>{lang.components.list.welcome_message}</Text>
          <Text>{title}</Text>
          <Text>{description}</Text>
            {this.listMovies()}
      </View>

    );
  }
}
//Bu komponent için movieList props'u gerekmektedir.
MovieLister.propTypes = {
  movieList: PropTypes.object.isRequired
};

export default MovieLister;
