import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { logOut } from "../../../redux/auth/auth-operations";
import Modal from "../modalPort/Modal";
import spriteSvg from "../../../assets/icons.svg";
import {
  ButtonWrap,
  CancelButton,
  CloseButton,
  ModalWrap,
  SuccesButton,
  Title,
  LogoutIcon,
  CloseIcon,
} from "./ModalLogOut.styled";

const ModalLogOut = ({ toggleModal }) => {
  const dispatch = useDispatch();
  const onSucces = () => dispatch(logOut());
  return (
    <Modal toggleModal={toggleModal}>
      <ModalWrap>
        <Title>Already leaving?</Title>
        <ButtonWrap>
          <CancelButton type="button" onClick={toggleModal}>
            Cancel
          </CancelButton>
          <SuccesButton type="button" onClick={onSucces}>
            Yes
            <LogoutIcon>
              <use href={spriteSvg + "#logout"} />
            </LogoutIcon>
          </SuccesButton>
        </ButtonWrap>

        <CloseButton onClick={toggleModal}>
          <CloseIcon>
            <use href={spriteSvg + "#cross"} />
          </CloseIcon>
        </CloseButton>
      </ModalWrap>
    </Modal>
  );
};

export default ModalLogOut;

ModalLogOut.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};
