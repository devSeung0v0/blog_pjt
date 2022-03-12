import React from 'react'
import styledComponents from 'styled-components'

const EmojiModal = styledComponents.div`
  width: 100px;
  border-radius: 20px;
  background-color: aliceblue;
  margin-top:10px;
  z-index: 1;
  position: absoulte;
`

const Emojis = styledComponents.span`
padding: 10px;
cursor: pointer;
font-size:20px
`

export default function Emoji(){
  return(
    <>
    < EmojiModal>
    < Emojis>😄</Emojis>
    < Emojis>😍</Emojis>
    < Emojis>😢</Emojis>
    < Emojis>😡</Emojis>
    < Emojis>😱</Emojis>
    </EmojiModal>
    </>
  )
}