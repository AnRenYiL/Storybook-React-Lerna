import { addParameters, configure } from '@storybook/react';
import "./reset.css";
import koalaTheme from './koalaTheme';

addParameters({
    options: {
        theme: koalaTheme,
        showPanel: true,
        panelPosition: "bottom",
    },
});

// automatically import all files ending in *.stories.js
const req = require.context('../packages', true, /\.stories\.js$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);