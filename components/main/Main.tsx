import * as React from "react";
import {
  PageHead,
  MainWrapper,
  BlogWrapper,
  ImageWrapper,
  DateLabel,
  PlayBtn,
  EndTextWrapper,
  BlogCatMain,
  BlogHead,
  SubTitle,
} from "./mainComponents";
import Image from "next/image";
import BlogImg from "../../assets/images/blogImg.png";
import { PlayBtnIcon,CommentIcon,LikeIcon } from "../../assets";
import { Aside } from "./Aside/Aside";
import { CommentForm } from "./commentform/CommentForm";

export const Main = () => {
  return (
    <MainWrapper>
      <PageHead>SocialWell Technologies</PageHead>
      <BlogWrapper>
        <ImageWrapper>
          <Image
            width="100%"
            height="65%"
            layout="responsive"
            objectFit="contain"
            src={BlogImg}
          />
          <DateLabel>
            <h2>13</h2>
            Jan
          </DateLabel>
          <PlayBtn>
            <PlayBtnIcon />
          </PlayBtn>
        </ImageWrapper>
        <EndTextWrapper>
          <div>100 Views</div>
          <div>3 min read</div>
        </EndTextWrapper>
        <BlogCatMain>BLOG CATEGORY MAIN</BlogCatMain>
        <BlogHead>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. In,
          recusandae dolorem? Id at dolores adipisci exercitationem? Totam et
          doloremque quod.
        </BlogHead>
        <SubTitle>
          <div className="text-circle">L</div>
          <div>Lorem Ipsum</div>
        </SubTitle>
        <BlogCatMain section>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam sint
          dicta sapiente! Exercitationem sequi sapiente ut voluptate, nihil cum
          accusantium impedit itaque a obcaecati rem tempora, incidunt ipsum in,
          perspiciatis delectus beatae suscipit sunt mollitia unde accusamus?
          Architecto eos illo magnam magni. Distinctio neque explicabo expedita
          officiis iste unde modi provident. Totam nemo quibusdam aspernatur
          molestias blanditiis iure tempore iste doloribus, delectus inventore
          eum libero earum. Eaque dolorem odio atque sed autem, aspernatur
          deserunt voluptatibus similique quas laborum neque itaque et vitae
          fugiat est suscipit, fugit, nulla eius nobis eum! A beatae maiores
          impedit fugiat, officiis voluptas minus eligendi harum! Doloribus ipsa
          consectetur ipsam soluta debitis. Ducimus tenetur veritatis fugit
          omnis dolore praesentium unde sunt, reiciendis iure obcaecati, aliquam
          rem qui repellat necessitatibus cupiditate asperiores placeat sit
          libero velit aspernatur quis sequi? Facilis hic aut vitae recusandae
          laudantium nostrum perspiciatis amet? Tenetur veritatis, sit et labore
          aliquid aspernatur libero quibusdam.
        </BlogCatMain>
        <SubTitle>
          <h2>Lorem Ipsum</h2>
        </SubTitle>
        <BlogCatMain section>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam sint
          dicta sapiente! Exercitationem sequi sapiente ut voluptate, nihil cum
          accusantium impedit itaque a obcaecati rem tempora, incidunt ipsum in,
          perspiciatis delectus beatae suscipit sunt mollitia unde accusamus?
          Architecto eos illo magnam magni. Distinctio neque explicabo expedita
          officiis iste unde modi provident. Totam nemo quibusdam aspernatur
          molestias blanditiis iure tempore iste doloribus, delectus inventore
          eum libero earum. Eaque dolorem odio atque sed autem, aspernatur
          deserunt voluptatibus similique quas laborum neque itaque et vitae
          fugiat est suscipit, fugit, nulla eius nobis eum! A beatae maiores
          impedit fugiat, officiis voluptas minus eligendi harum! Doloribus ipsa
          consectetur ipsam soluta debitis. Ducimus tenetur veritatis fugit
          omnis dolore praesentium unde sunt, reiciendis iure obcaecati, aliquam
          rem qui repellat necessitatibus cupiditate asperiores placeat sit
          libero velit aspernatur quis sequi? Facilis hic aut vitae recusandae
          laudantium nostrum perspiciatis amet? Tenetur veritatis, sit et labore
          aliquid aspernatur libero quibusdam.
        </BlogCatMain>
        <EndTextWrapper reaction>
        <div><CommentIcon /> Comment</div>
        <div><LikeIcon /> Like</div>
        </EndTextWrapper>
      </BlogWrapper>
      <Aside />
      <CommentForm />
    </MainWrapper>
  );
};
