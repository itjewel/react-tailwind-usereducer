import React, { useState } from 'react'
import { Button } from '../../components/button'
import styled from 'styled-components';
import tw from 'twin.macro';
const ButtonsContainer = styled.div`
  ${tw`
    flex
    flex-wrap
    mt-4
  `};
`;

const Counts = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(100);
  
  return (
    <>
    <div>Counts:   {count}</div>
      <ButtonsContainer>
          <Button text="+" onClick={()=>setCount((kam)=>kam+1)} />
          <Button  text="-"  onClick={()=>setCount(p=>p-1)}/>
          <Button  text="Reset"  onClick={()=>setCount(0)}/>
        </ButtonsContainer>


         <div>Counts:   {count2}</div>
      <ButtonsContainer>
          <Button text="+" onClick={()=>setCount2((kam)=>kam+10)} />
          <Button  text="-"  onClick={()=>setCount2(p=>p-20)}/>
          <Button  text="Reset"  onClick={()=>setCount2(0)}/>
        </ButtonsContainer>
       
    </>
  )
}

export default Counts