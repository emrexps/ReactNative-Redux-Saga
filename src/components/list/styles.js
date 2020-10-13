
const Dimensions=require("Dimensions")

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;


export const styles={
container:{
    height:null,
    width:deviceWidth*0.60,
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
    marginBottom:20,
},
}