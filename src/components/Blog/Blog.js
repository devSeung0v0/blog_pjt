import React, { useState } from 'react'
import './blog.css'
import Modal from './Modal'
import Emoji from './Emoji';


export default function Blog(){
  

  let [title,titleCng] = useState(['서울 근교 여행지 추천','맥북 m1 에어 구매후기','힐링하기 좋은 서울 전시회 추천']) 
  let [num, numCng] = useState(0)
  let [date, dateCng] = useState('1월 26일 발행')
  let [modal,modalCng] = useState(false)
  let [feel, feelCng] = useState(false)

  const likeNum = () => {
      numCng(num + 1)
  }
  const dateFnc = () => {
    // //인덱스 0번의 값을 바꿔주기
    // const newDate = [...date]
    //   if(newDate[0]= '1'){
    //     newDate[0] = '2'
    //     dateCng(newDate)
    //   }else{
    //     newDate[0]= '1'
    //     dateCng(newDate)
    //   }

    // 스프레드 오퍼레이터로 기존 date의 인덱스를 호출해서 값을 바꿔주는 방법도 생각해보았으나 월,일이 두자리 숫자일 경우는 인덱스가 달라지므로 해결 어려워짐

    // 나의 응용 (오늘 날짜로 값 바꿔주기)
    const today = new Date();
    const todayM = today.getMonth() + 1;
    const todayD = today.getDate();
    dateCng(`${todayM}월 ${todayD}일 발행`)
  }
  const titleFnc = () => {
    const newTitle = [...title] // 값 복사, spread operator
    newTitle[1] = '맥북 m1 프로 구매후기'//
    titleCng(newTitle)
  }
  const titleSort = () => {
    const newTitle = [...title]
    newTitle.sort()
    titleCng(newTitle)
  }

  // const modalOpen = () => {
  //   modal === true
  //   ? modalCng(false)
  //   : modalCng(true)
  // }

  // const feelModalOpen = ()=> {
  //   feel == true
  //   ? feelCng(false)
  //   : feelCng(true)
  // }

  return(
    <div className="App">
      <div className='nav'>
        <p className='navTitle'>DevSeung's Blog</p>
        <p className='navFeeling' onClick={ () => feelCng(!feel) }>What's up?
        {
          feel === true
          ? <Emoji />
          : null // 빈 html
        }
        </p>

        
      </div>
      <div className='list'>
          <h3>{ title[0] }<span onClick={ likeNum }> 👍</span> { num } </h3>
          <p>{ date }</p>
          <button onClick={ dateFnc }>발행일 오늘 날짜로 변경</button>
          <button onClick={ titleSort }>제목 오름차순 정렬</button>
          <hr/>
      </div>
        <div className='list'>
          <h3>{ title[1] }</h3>
          <p>{ date }</p>
          <button onClick={ titleFnc }> 제목 변경</button>
          <hr/>
        </div>
          <div className='list'>
          <h3 onClick={ () => modalCng(!modal) }>{ title[2] }</h3>
          <p>{ date }</p>
          {
            modal === true
            ? <Modal />
            : null // 빈 html
          }
          <hr/>
        </div>

    </div>
  );
}