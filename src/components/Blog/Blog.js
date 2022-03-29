import React, { useState } from 'react'
import './blog.css'
import Modal from './Modal'
import Emoji from './Emoji';
import styled from 'styled-components';

const TitleBox = styled.div`
  display: flex;
  align-items: center;
`

export default function Blog(){
  

  let [title,titleCng] = useState(['서울 근교 여행지 추천','맥북 m1 에어 구매후기','힐링하기 좋은 서울 전시회 추천']) 
  let [num, numCng] = useState([0,0,0])
  let [date, dateCng] = useState('1월 26일 발행')
  let [modal,modalCng] = useState(false)
  let [feel, feelCng] = useState(false)

  const likeNum = () => {
      numCng(num[0] + 1)
  }
  // const dateFnc = () => {

    // 나의 응용 (오늘 날짜로 값 바꿔주기)
  //   const today = new Date();
  //   const todayM = today.getMonth() + 1;
  //   const todayD = today.getDate();
  //   dateCng(`${todayM}월 ${todayD}일 발행`)
  // }
  // const titleFnc = () => {
  //   const newTitle = [...title] // 값 복사, spread operator
  //   newTitle[1] = '맥북 m1 프로 구매후기'//
  //   titleCng(newTitle)
  // }
  // const titleSort = () => {
  //   const newTitle = [...title]
  //   newTitle.sort()
  //   titleCng(newTitle)
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
        {
          title.map((text)=>{
            return (
            <div className='list'>
              <TitleBox>
                <h3>{ text } </h3>
                <span onClick={ likeNum }>👍</span>{num}
              </TitleBox>
              <p>{ date }</p>
              <hr/>
            </div>
            )
          })
        }

    </div>
  );
}