import classNames from "classnames"

const ColorInput = (props) => {
  const { className, ...otherProps } = props

  return (
    <input
      {...otherProps}
      className={classNames("border-2 h-10 w-10", className)}
    />
  )
}

export default ColorInput
