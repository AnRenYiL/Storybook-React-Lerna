import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs";
import Button from "../src/Button";

const Types = {
    DEFAULT: "default",
    PRIMARY: "primary",
    SECONDARY: "secondary",
    DESTRUCTIVE: "destructive",
    NOSTYLE: "noStyle",
    ACCENT: "accent",
    MINOR: "minor",
    LINK: "link",
    ICON: "icon"
};

const ButtonSizes = {
    XSMALL: "xsmall",
    SMALL: "small",
    MEDIUM: "medium",
    LARGE: "large",
    XLARGE: "xlarge"
};

function clickHandler() {
    action("Clicked a button")();
}

const buttonProps = () => ({
    children: text("label", "Default Button"),
    size: select("size", ButtonSizes, "small"),
    kind: select("kind", Types, "default"),
    onClick: clickHandler,
    isActive: boolean("isActive", false),
    isDisabled: boolean("isDisabled", false),
    isSubmit: boolean("isSubmit", false)
});

const ExampleStory = props => (
    <div>
        Showcase
        <br />
        <Button {...props} />
    </div>
);

export default () => <ExampleStory {...buttonProps()} />;
