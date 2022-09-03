import * as React from 'react'
import { SearchIcon } from '../../../assets'
import { AsideWrapper } from '../mainComponents'
import {InputWrapper,SearchBar,SearchIconWrapper,SideHeader,ShortText,TagBtn,TagWrapper} from "./asideComponents"

export const Aside = () => {
  return (
    <AsideWrapper>
    <InputWrapper>
    <SearchBar placeholder="SEARCH" />
    <SearchIconWrapper className="search">
      <SearchIcon />
    </SearchIconWrapper>
    </InputWrapper>
    <SideHeader>Recent Posts</SideHeader>
    {[1,2,3,4].map(i  => <ShortText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat facere similique ea inventore voluptatibus </ShortText>)}
    <SideHeader>Categories</SideHeader>
    <ShortText>Lorem Ipsum dolar</ShortText>
    <ShortText>Lorem Ipsum</ShortText>
    <ShortText>Lorem Ipsum dolar</ShortText>
    <ShortText>Lorem </ShortText>
    <ShortText>Lorem</ShortText>
    <SideHeader>Tags</SideHeader>
    <TagWrapper>

    {[1,2,3,4,5,6,7,8].map(i => <TagBtn>Lorem</TagBtn>)}
    </TagWrapper>
    <SideHeader>Recent Comments</SideHeader>
  </AsideWrapper>
  )
}
