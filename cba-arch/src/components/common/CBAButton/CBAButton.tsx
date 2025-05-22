import { Button } from "@mantine/core";
import { JSX, ReactNode } from "react";
import { CBAButtonProps } from "./CBAButton.types";

/**
 * Description
 * @param {CBAButtonProps} {children
 * @param {CBAButtonProps} props.variant The variant style of the button
 * @param {CBAButtonProps} props.size The size of the button
 * @param {CBAButtonProps} props.color The color of the button
 * @param {CBAButtonProps} props.leftSection The content to show on the left side of the button
 * @param {CBAButtonProps} props.rightSection The content to show on the right side of the button
 * @param {CBAButtonProps} props.disabled Whether the button is disabled
 * @param {CBAButtonProps} props.loading Whether the button is in loading state
 * @param {CBAButtonProps} props.fullWidth Whether the button should take full width
 * @param {CBAButtonProps} props.radius The border radius of the button
 * @param {CBAButtonProps} props.onClick The click handler for the button
 * @returns {ReactNode | JSX.Element} The button component
 */
const CBAButton = ({
  children,
  variant,
  size,
  color,
  leftSection,
  rightSection,
  disabled,
  loading,
  fullWidth,
  radius,
  onClick,
}: CBAButtonProps): ReactNode | JSX.Element => {
  return (
    <Button
      variant={variant}
      size={size}
      color={color}
      leftSection={leftSection}
      rightSection={rightSection}
      disabled={disabled}
      loading={loading}
      fullWidth={fullWidth}
      radius={radius}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CBAButton;
