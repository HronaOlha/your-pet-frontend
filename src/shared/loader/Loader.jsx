import { PacmanLoader } from "react-spinners";
import { theme } from "../../styles/theme";
import PropTypes from "prop-types";

const defaultCss = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 1000,
};

const Loader = ({
  size = 60,
  margin,
  color = theme.colors.primary,
  loading,
  cssOverride,
  speedMultiplier,
}) => {
  return (
    <PacmanLoader
      size={size}
      margin={margin}
      color={color}
      loading={loading}
      cssOverride={{ ...defaultCss, ...cssOverride }}
      speedMultiplier={speedMultiplier}
    />
  );
};

Loader.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  cssOverride: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  speedMultiplier: PropTypes.number,
};

export default Loader;
