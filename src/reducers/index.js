const reducer = (state = {}, action) => {
    switch (action.type) {
      case 'GET_NEWS':
        return { ...state, loading: true };
        case 'COMMENTS_RECEIVED':
        return {...state,comments:action.json,loading:false}
      case 'NEWS_RECEIVED':
        return { ...state, news: action.json, loading: false }
      default:
        return state;
    }
  };
  
  export default reducer;
  