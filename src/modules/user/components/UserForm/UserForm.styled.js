import styled from "styled-components";

export const UserBtnPen = styled.button`
  background: white;
  color: rgba(136, 136, 136, 1);
  margin-left: 320px;
  border: none;

  font-size: 18px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    padding: 0;
    top: 0;
  }
  @media screen and(min-width: 320px) {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
  }
`;

export const UserImgBox = styled.div`
  margin-bottom: 32px;

  img {
    object-fit: cover;
    display: block;
    margin: auto;
    border-radius: 20%;
    max-width: 100%;
  }
`;

export const UserImgInputBody = styled.div`
  position: relative;
`;

export const UserImgInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

export const UserFormBody = styled.div`
  padding-right: 0;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    flex: 1 1 auto;
    padding-right: 52px;
  }
`;

export const UserFormItem = styled.div`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const UserFormLabel = styled.label`
  font-weight: 500;
  font-size: 16px;
  line-height: 1, 112;
  flex: 0 0 85px;

  @media screen and (min-width: 320px) {
    font-size: 14px;
    flex: 0 0 60px;
  }
`;

export const UserFormInput = styled.input`
  outline: 0;
  background: none;

  flex: 1 1 auto;

  width: 255px;
  height: 32px;
  padding: 4px 12px;
  background: white;

  border: 1px solid #54adff;
  border-radius: 40px;

  @media screen and (min-width: 320px) {
    font-size: 12px;
  }

  &:disabled {
    border: none;
    background: none;
  }
`;

export const UserFormBtn = styled.button`
  background: white;
  color: rgba(136, 136, 136, 1);
  border: none;
  display: flex;
  align-items: center;
  font-size: 18px;
`;
