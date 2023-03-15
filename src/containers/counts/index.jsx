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
  const [count, setCount] = useState(1);
  
  return (
    <>
    <div>Counts:   {count}</div>
      <ButtonsContainer>
          <Button text="+" onClick={()=>setCount((p)=>p+1)} />
          <Button  text="-"  onClick={()=>setCount(p=>p-1)}/>
        </ButtonsContainer>
       
    </>
  )
}

export default Counts