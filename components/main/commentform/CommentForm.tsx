import * as React from "react";
import {
  FormWrapper,
  FormHeader,
  HorizontalInput,
  StyledInput,
  CheckBoxInput,
  StyledTextBox,
  SubmitBtn
} from "./commentFormComponents";

export const CommentForm = () => {
  return (
    <FormWrapper>
      <FormHeader>Post a Comment</FormHeader>
      <form>
        <HorizontalInput>
          <StyledInput type="text" placeholder="Your Name" />
          <StyledInput type="email" placeholder="Your Email" />
        </HorizontalInput>
        <CheckBoxInput type="checkbox" id="check" />
        <label htmlFor="check">Save my name, email, and website in this browser for the next time I comment.</label>
        <StyledTextBox rows="4" cols="50" placeholder="Your Comment" />
        <SubmitBtn>Submit</SubmitBtn>
      </form>
    </FormWrapper>
  );
};
