import * as FaIcons from "react-icons/io5";
import PropTypes from "prop-types";
const CustomIcon = ({ name, className, size = 16, ...props }) => {
    const FoundIcon = FaIcons[name];
    return FoundIcon ? <FoundIcon size={size} className={`custom-icon${className ? " " + className : ""}`} {...props} /> : null;
};
CustomIcon.propTypes = {
    name: PropTypes.string.isRequired,
};
export default CustomIcon;