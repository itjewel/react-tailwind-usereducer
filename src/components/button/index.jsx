import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const BaseButton = styled.button`
  ${tw`
    pl-5 
    pr-5 
    pt-3 
    pb-3 
    outline-none 
    rounded-md 
    text-white 
    text-xs 
    font-semibold 
    border-transparent 
    border-2 
    border-solid 
    focus:outline-none 
    transition-all 
    duration-200 
    ease-in-out
    m-1 
  `};
`;

const OutlinedButton = styled(BaseButton)`
  ${tw`
    bg-red-500
    hover:bg-transparent
    hover:text-red-500
    hover:border-red-500
  `};
`;

const FilledButton = styled(BaseButton)`
  ${tw`
    border-red-500
    text-red-500
    bg-transparent
    hover:bg-red-500
    hover:text-white
    hover:border-transparent
  `};
`;

export function Button(props) {

  const { theme, text, className, ...rest} = props;

  if (theme === "filled")
    return <FilledButton className={className} {...rest}>{text}</FilledButton>;
  else return <OutlinedButton className={className} {...rest}>{text}</OutlinedButton>;
}