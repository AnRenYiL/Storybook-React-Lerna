import style from 'styled-components'
import tokens from '@anrenyil/tokens'

const disabledStyles = `
  box-shadow: none;
  color: gray;
  cursor: not-allowed;
  text-decoration: none;
  text-shadow: none;

  &:focus {
    box-shadow: none;
    text-shadow: none;
    transform: none;
  }
`;
const ButtonWithStyle = style.button`
  border-radius:  ${tokens.button.borderRadius};
  border-style: solid;
  border-width: 1px;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  font-family: ${tokens.fontFamily.default};
  font-weight: bold;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  ${props => (getColor(props))}
  ${props => (props.isDisabled ? disabledStyles : "")}
`
function getColor(props) {
  if (props.kind == "primary")
    return "color: red";
  else return "color: blue";
}
export default ButtonWithStyle;