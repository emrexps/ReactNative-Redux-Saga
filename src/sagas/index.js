import { put, takeLatest, all,takeEvery } from 'redux-saga/effects';

function* fetchNews() {

  const json = yield fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json());

    yield put({ type: "NEWS_RECEIVED", json: json.title || [{ error: json.message }] });
}
function * fetchComments(){
    
    const json=yield fetch('https://jsonplaceholder.typicode.com/todos/2')
      .then(response=>response.json())
       
      yield put({type:"COMMENTS_RECEIVED",json:json.title || [{ error: json.message }]})
  }


function* actionWatcher() {
  //yield takeLatest('GET_NEWS', fetchNews)
  yield takeEvery('GET_NEWS', fetchNews)
}

function *secondActionWatcher(){
    
    yield yield takeEvery('GET_NEWS', fetchComments)
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
    secondActionWatcher()
  ]);
}
