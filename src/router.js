import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import MoviesContainer from './pages/movies_home'



const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "movies" component = {MoviesContainer} title = "movies" initial={true} hideNavBar={true} />
     
      </Scene>
   </Router>
)

export default Routes
