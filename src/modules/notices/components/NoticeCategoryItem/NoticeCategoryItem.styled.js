import styled from "styled-components";

export const Card = styled.li`
  width: 280px;

  @media (min-width: 768px) {
    width: 336px;
  }

  @media (min-width: 1280px) {
    width: 288px;
  }

  height: 456px;
  background-color: #fff;
  border-radius: 0px 0px 40px 40px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
`;

export const ImageWrap = styled.div`
  position: relative;
`;

export const Image = styled.img`
  display: block;
  width: 280px;

  @media (min-width: 768px) {
    width: 336px;
  }

  @media (min-width: 1280px) {
    width: 288px;
  }

  height: 288px;
`;

export const AddToFavorite = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: none;
`;

export const HeartIconWrap = styled.svg`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;

  &:hover use,
  &:focus use {
    stroke: #377ac8;
    transform: scale(1.05);
  }
`;

export const DeleteFromOwn = styled.button`
  position: absolute;
  top: 68px;
  right: 12px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: none;
`;

export const DeleteIcon = styled.svg`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;

  &:hover use,
  &:focus use {
    stroke: #377ac8;
    transform: scale(1.05);
  }
`;

export const Category = styled.p`
  position: absolute;
  top: 12px;
  left: 0px;
  width: 126px;
  height: 32px;
  padding: 11px 17px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0px 16px 16px 0px;
  background: #cce4fb;

  color: #111;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
`;

export const City = styled.p`
  position: absolute;
  bottom: 12px;
  left: 12px;
  display: flex;
  width: 80px;
  padding: 2px 4px;
  justify-content: center;
  align-items: center;
  gap: 4px;

  border-radius: 16px;
  background: #cce4fb;

  overflow: hidden;
  color: #111;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.48px;
`;
export const CitySvg = styled.svg`
  width: 24px;
  height: 24px;
`;

export const Years = styled.p`
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  width: 80px;
  padding: 2px 4px;
  justify-content: center;
  align-items: center;
  gap: 4px;

  border-radius: 16px;
  background: #cce4fb;

  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.48px;
`;

export const YearsSvg = styled.svg`
  width: 24px;
  height: 24px;
`;

export const Gender = styled.p`
  position: absolute;
  bottom: 12px;
  right: 12px;
  display: flex;
  width: 80px;
  padding: 2px 4px;
  justify-content: center;
  align-items: center;
  gap: 4px;

  border-radius: 16px;
  background: #cce4fb;

  overflow: hidden;
  color: #111;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.48px;
`;

export const GenderSvg = styled.svg`
  width: 24px;
  height: 24px;
`;

export const CardTextInfoWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px 24px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #111;
`;

export const LearnMoreBtn = styled.button`
  display: flex;
  width: 248px;
  padding: 8px 28px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.64px;

  border-radius: 40px;
  border: 2px solid #54adff;
  color: #54adff;
  background-color: #ffffff;

  &:hover,
  &:focus {
    border: transparent;
    color: #fef9f9;
    background: linear-gradient(315deg, #419ef1 0%, #9bd0ff 100%);
  }
`;
