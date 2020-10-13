
const Dimensions=require("Dimensions")
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;


export const styles={
container:{
    flex:1,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'red'
},
button:{
    backgroundColor:'tomato',
    height:40,
    width:80,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center'
},
text:{
    alignSelf:'center',
    color:'white'
}

}