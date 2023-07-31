import { useState } from "react";
import Modal from "../../../../shared/modals/modalPort/Modal";

import {
  Box,
  BtnClose,
  BtnCongrats,
  Svg,
  Text,
  Title,
} from "./ ModalCongrats.styled";

import sprite from "../../../../assets/icons.svg";
import { ReactComponent as Pawnprint } from "../../../../assets/icons/pawprint.svg";

export const ModalCongrats = () => {
  const [isOpenModalCongrats, setIsOpenModalCongrats] = useState(true);

  const closeModal = () => {
    setIsOpenModalCongrats(false);
  };

  return (
    <>
      {isOpenModalCongrats && (
        <Modal toggleModal={closeModal}>
          <Box>
            <BtnClose type="button" onClick={closeModal}>
              <Svg>
                <use href={sprite + "#cross"} />
              </Svg>
            </BtnClose>
            <Title>Congrats!</Title>
            <Text>Youre registration is success</Text>
            <BtnCongrats type="button" onClick={closeModal}>
              Go to profile
              <Pawnprint />
            </BtnCongrats>
          </Box>
        </Modal>
      )}
    </>
  );
};
