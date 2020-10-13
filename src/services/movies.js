import {AsyncStorage} from 'react-native';
import {baseService} from './base_service.js'
import {MOVIES,ALBUMS} from '../constants/endpoints.js'
import {POST,GET} from '../constants/api_methods.js'
import {saveUserId,getUserId} from '../utils/login_utils'


export const  moviesFromApi=(DATA)=>{
    return baseService(MOVIES,GET,DATA,null).then(async (response)=>{
       await saveUserId("11-2-3-2") //response içerisinden gelen token örneği
        return response
    });
}

export   const  moviesFromProtectedApi=(DATA)=> {
     return  getUserId().then((token) => {
        if(token!==null){
            return baseService(ALBUMS,GET,DATA,token);
        }
    }); 
  }


