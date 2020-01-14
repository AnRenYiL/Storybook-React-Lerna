import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from '@storybook/addon-knobs';
import Showcase from "./Showcase";

storiesOf("Button", module)
    .addDecorator(withKnobs)
    .add("Showcase", () => <Showcase />);

