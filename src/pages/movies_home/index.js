import React, { Component } from "react";
import { Text, View, TouchableOpacity, AsyncStorage,KeyboardAvoidingView,TextInput } from "react-native";
import PropTypes from "prop-types";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import { styles } from "./styles";
import {getNews} from '../../actions'
import lang from '../../locale/tr.json'

 class MoviesContainer extends Component {
  constructor(props) {
    super(props);
  }



  render() {
  
    return (
    <View style={{'marginTop':100}}>
      <Text>Hello</Text>
      <TouchableOpacity onPress={()=>{this.props.getNews()}}>
      <Text>Click</Text>
      <Text>{this.props.article}</Text>
      <Text>{this.props.comments}</Text>
      </TouchableOpacity>
    </View>
    );
  }
}

const mapStateToProps = (state) => ({
  
  article: state.news,
  comments:state.comments
})




const mapDispatchToProps = {
  getNews: getNews,
};

MoviesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoviesContainer);
export default MoviesContainer;