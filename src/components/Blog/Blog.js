import React, { useState } from 'react'
import './blog.css'
import Modal from './Modal'
import Emoji from './Emoji';
import styled from 'styled-components';

const TitleBox = styled.div`
  display: flex;
  align-items: center;
`
const Publish = styled.div`
  margin-top:30px;
  margin-bottom: 30px;
`

export default function Blog(){
  

  let [title,titleCng] = useState(['서울 근교 여행지 추천','맥북 m1 에어 구매후기','힐링하기 좋은 서울 전시회 추천']) 
  let [num, numCng] = useState(0)
  let [date, dateCng] = useState('1월 26일 발행')
  let [modal,modalCng] = useState(false)
  let [feel, feelCng] = useState(false)
  let [modalTitle,modalTitleCng] = useState(0)
  let [inputData,inputDataCng] = useState('')

  const likeNum = () => {
      numCng(num + 1)
  }
  const titleAdd = ()=>{
    const newTitle=[...title]
    newTitle.unshift(inputData)
    titleCng(newTitle)
  }

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
          title.map((text,idx)=>{
            return (
            <div className='list' key={idx}>
              <TitleBox>
                <h3 onClick={(()=>modalTitleCng(idx))}>{ text } </h3>
                <span onClick={ likeNum }>👍</span>{num}
              </TitleBox>
              <p>{ date }</p>
              <hr/>
            </div>
            )
          })
        }
        <Publish>
          <input type="text" className='publishInput' onChange={(e)=>inputDataCng(e.target.value)}/>
          <button className='publishBtn' onClick={()=>titleAdd()}>출간하기</button>
        </Publish>
        <button onClick={()=>modalCng(!modal)}>모달 열고 닫기</button>
        {
                modal===true
                ?<Modal title={title} modalTitle={modalTitle}/>
                : null
        }

    </div>
  );
}