/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬독학']);
  let [따봉,따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState('');
  let [title, setTitle] = useState(0);
  let [inputPost, setInputPost] = useState('');
  const changeCoat = () => {
    let copy = [...글제목];
    copy[0] = '여자코트추천';
    글제목변경(copy);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>ReactBlog</div>
      </div>
      
      {/* <button onClick={()=>{
        let arraySort = [...글제목];
        arraySort.sort();
        console.log(arraySort);
        글제목변경(arraySort);
      }}>가나다순정렬</button>
      <button onClick={()=> {
        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        글제목변경(copy);
      }}>글수정</button>
      <div className="list" >
        <h4>{ 글제목[0] }
        <span onClick={()=>{ 따봉변경( 따봉+1 )}}>👍</span> {따봉} </h4>
        <p>2월 17일 발행 </p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div> */}
      { 
        글제목.map(function(a,i){
          return (
          <div className="list" key={i}>
            <h4 onClick={()=> {setTitle(i)}}>{a}<span onClick={()=>{ 
              let 따봉복사 = [...따봉];
              따봉복사[i] = 따봉복사[i] + 1;
              따봉변경(따봉복사);
              }}>👍</span> {따봉[i]} </h4>
            <p>2월 18일 발행</p>
          </div> 
          )
        }) 
      }
      <input onChange={(e)=> {
          setInputPost(e.target.value);
          console.log(e.target.value);
      }}/>
      <button onClick={()=>{
        console.log(inputPost);
        let arrayAdd = [...글제목];
        arrayAdd.push(inputPost);
        글제목변경(arrayAdd);
      }}>추가</button>
      <Modal title={title} 글제목={글제목}></Modal>
    </div>
  );
}
function Modal(props){
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.changeCoat} >글수정</button>
    </div>
  )
}
export default App;
