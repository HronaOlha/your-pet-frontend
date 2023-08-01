import {
  Input,
  SubmitBtn,
  Form,
  ResetBtn,
  BtnsWrap,
  ContainerNoticesSearch,
} from "./NoticesSearch.styled";
import useSearch from "./hook/useSearch";
import icons from "../../../../assets/icons.svg";

function NoticesSearch() {
  const { search, handleSubmit, handleChange, resetInput } = useSearch();

  return (
    <ContainerNoticesSearch>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleChange}
        />
        <BtnsWrap>
          <SubmitBtn type="submit">
            <svg viewBox="0 0 24 24">
              <use xlinkHref={icons + "#search"} fill="#54ADFF" />
            </svg>
          </SubmitBtn>
          {search && (
            <ResetBtn onClick={resetInput}>
              <svg viewBox="0 0 24 24">
                <use xlinkHref={icons + "#cross"} stroke="rgb(255, 193, 7)" />
              </svg>
            </ResetBtn>
          )}
        </BtnsWrap>
      </Form>
    </ContainerNoticesSearch>
  );
}

export default NoticesSearch;
