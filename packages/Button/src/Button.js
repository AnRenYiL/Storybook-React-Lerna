import React from 'react';
import PropTypes from "prop-types";
import ButtonWithStyle from "./Button.styles";
const ButtonSizes = {
    XSMALL: "xsmall",
    SMALL: "small",
    MEDIUM: "medium",
    LARGE: "large",
    XLARGE: "xlarge"
};

const Kinds = {
    DEFAULT: "default",
    PRIMARY: "primary",
    SECONDARY: "secondary",
    DESTRUCTIVE: "destructive",
    FLAT: "flat",
    MINOR: "minor",
    LINK: "link",
};

const propTypes = {
    canPropagate: PropTypes.bool,
    children: PropTypes.node,
    isDisabled: PropTypes.bool,
    isSubmit: PropTypes.bool,
    kind: PropTypes.oneOf(Object.values(Kinds)),
    onClick: PropTypes.func,
    role: PropTypes.string,
    size: PropTypes.oneOf(Object.values(ButtonSizes))
};

const defaultProps = {
    canPropagate: true,
    children: null,
    isDisabled: false,
    isSubmit: false,
    kind: Kinds.DEFAULT,
    onClick: () => { },
    role: "button",
    size: ButtonSizes.MEDIUM
};

const Button = React.forwardRef((props, ref) => {
    const {
        canPropagate,
        children,
        isDisabled,
        isSubmit,
        kind,
        onClick,
        role,
        ...moreProps
    } = props;

    const buttonRef = React.useRef(null);
    React.useImperativeHandle(ref, () => ({
        focus: () => {
            buttonRef.current.focus();
        },
    }));

    const handleClick = event => {
        if (!canPropagate) event.stopPropagation();
        if (!isDisabled) onClick(event);
    };
    const buttonProps = {
        isDisabled,
        kind,
        onClick: handleClick,
        ref: buttonRef,
        role,
        ...moreProps,
    };
    buttonProps.type = isSubmit ? "submit" : "button";
    return (
        // <button {...buttonProps} >
        //     {children}
        // </button>
        <ButtonWithStyle {...buttonProps} >
            {children}
        </ButtonWithStyle>
    );
});

Button.Kinds = Kinds;
Button.displayName = "Button";
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;


