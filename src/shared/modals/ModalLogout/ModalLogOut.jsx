import PropTypes from "prop-types";
import Modal from "../modalPort/modal";
import {
  ButtonWrap,
  CancelButton,
  CloseButton,
  ModalWrap,
  SuccesButton,
  Title,
} from "./ModalLogOut.styled";
import { ReactComponent as CloseSvg } from "../../../assets/icons/cross-small.svg";
import { ReactComponent as LogOutSvg } from "../../../assets/icons/logout.svg";
import { useDispatch } from "react-redux";
import { logOut } from "../../../redux/auth/auth-operations";

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
            <LogOutSvg />
          </SuccesButton>
        </ButtonWrap>

        <CloseButton onClick={toggleModal}>
          <CloseSvg />
        </CloseButton>
      </ModalWrap>
    </Modal>
  );
};

export default ModalLogOut;

ModalLogOut.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};
