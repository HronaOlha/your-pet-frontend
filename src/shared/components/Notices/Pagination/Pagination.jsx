import PropTypes from "prop-types";
import {
  BtnBack,
  BtnForward,
  NumBtn,
  NumItem,
  NumbersContainer,
} from "./Pagination.styled";

const Pagination = ({ totalItems, currentPage, setCurrentPage }) => {
  const count = Math.ceil(totalItems / 12);

  const handleGoToPage = (page) => {
    setCurrentPage(Math.min(Math.max(page, 1), count));
  };

  const generatePageNumbers = () => {
    if (count <= 6) {
      return Array.from({ length: count }, (_, index) => index + 1);
    } else {
      const pageNumbers = [];
      const maxButtons = 6;

      const middlePage = Math.ceil(maxButtons / 2);

      if (currentPage <= middlePage) {
        for (let i = 1; i <= maxButtons - 2; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(count);
      } else if (currentPage >= count - (middlePage - 1)) {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = count - (maxButtons - 3); i <= count; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (
          let i = currentPage - (middlePage - 2);
          i <= currentPage + (middlePage - 2);
          i++
        ) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(count);
      }

      return pageNumbers;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 112,
      }}
    >
      <BtnBack
        onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
        disabled={currentPage === 1}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
        >
          <path
            d="M9.32819 18.5172L11.1215 20.8323C11.2774 21.0299 11.5633 21.0582 11.7712 20.8888C11.9532 20.7194 11.9791 20.4088 11.8232 20.183L10.1339 18.009L24.5322 18.009C24.7921 18.009 25 17.7832 25 17.5009C25 17.2185 24.7921 16.9927 24.5322 16.9927L10.1339 16.9927L11.8232 14.8187C11.9791 14.6211 11.9532 14.3106 11.7712 14.1129C11.6933 14.0282 11.5893 14 11.4853 14C11.3554 14 11.2254 14.0565 11.1475 14.1694L9.35418 16.4845C8.88636 17.1056 8.88636 17.9526 9.32819 18.5172Z"
            fill="#111111"
            fillOpacity="0.5"
          />
          <circle
            cx="17.5"
            cy="17.5"
            r="17"
            transform="rotate(180 17.5 17.5)"
            stroke="#54ADFF"
          />
        </svg>
      </BtnBack>
      <NumbersContainer>
        {generatePageNumbers().map((pageNumber, index) => (
          <NumItem key={index}>
            {pageNumber === "..." ? (
              <p>{pageNumber}</p>
            ) : (
              <NumBtn
                currentPage={currentPage === pageNumber}
                onClick={() => handleGoToPage(pageNumber)}
                disabled={currentPage === pageNumber}
              >
                <span>{pageNumber}</span>
              </NumBtn>
            )}
          </NumItem>
        ))}
      </NumbersContainer>
      <BtnForward
        onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
        disabled={currentPage === count}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
        >
          <path
            d="M25.3506 16.7316L25.3519 16.7331C25.4656 16.8785 25.5407 17.0533 25.574 17.2399L25.1869 16.7417L23.5067 14.5796C23.4871 14.548 23.4784 14.51 23.4811 14.474C23.4833 14.4454 23.4918 14.427 23.4988 14.4167C23.5157 14.4067 23.529 14.4057 23.5365 14.4064C23.5454 14.4072 23.5523 14.4105 23.559 14.4186L25.3506 16.7316ZM24.8661 17.3972H25.592C25.5955 17.4646 25.5937 17.5328 25.5865 17.6011H24.8661H10.4678C10.4601 17.6011 10.449 17.5988 10.4353 17.584C10.421 17.5684 10.4062 17.54 10.4062 17.4991C10.4062 17.4582 10.421 17.4299 10.4353 17.4143C10.449 17.3995 10.4601 17.3972 10.4678 17.3972H24.8661ZM25.1869 18.2566L25.5543 17.7838C25.5121 17.9531 25.4357 18.1187 25.3228 18.2691L23.5314 20.5818L23.5245 20.5906L23.523 20.5929C23.521 20.5933 23.5182 20.5938 23.5147 20.5938C23.5142 20.5938 23.5137 20.5937 23.5132 20.5937C23.4951 20.5675 23.4836 20.5354 23.4811 20.5031C23.4781 20.4628 23.4897 20.4406 23.4957 20.4329L23.4976 20.4305L25.1869 18.2566Z"
            fill="#54ADFF"
            stroke="#54ADFF"
            strokeWidth="0.8125"
          />
          <circle cx="17.5" cy="17.5" r="17" stroke="#54ADFF" />
        </svg>
      </BtnForward>
    </div>
  );
};

export default Pagination;

Pagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};
