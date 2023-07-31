import PropTypes from "prop-types";

const ChangeStepBtn = ({ isFirstStep, isLastStep, next, back }) => {
    return (
        <div>
            <button type="button" onClick={back}>{isFirstStep ? "Cancel" : "Back"}</button>
            {!isLastStep && <button type="button" onClick={next}>Next</button>}
            {isLastStep && <button type="submit">Done</button>}
        </div>
        
    )
};

export default ChangeStepBtn;

ChangeStepBtn.propTypes = {
    isFirstStep: PropTypes.bool.isRequired,
    isLastStep: PropTypes.bool.isRequired,
    next: PropTypes.func.isRequired,
    back: PropTypes.func.isRequired
};