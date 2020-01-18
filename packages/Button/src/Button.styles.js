import style from 'styled-components'

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
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  font-weight: bold;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  ${props => (props.isDisabled ? disabledStyles : "")}
  ${props => (getColor(props))}
`
function getColor(props) {
  if (props.kind == "primary")
    return "color: red";
  else return "color: blue";
}
export default ButtonWithStyle;