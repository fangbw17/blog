
import styled from "styled-components";

interface ButtonProps {
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
}

const StyledButton = styled.button<ButtonProps>`
  padding: ${(props) => {
    switch (props.size) {
      case "sm":
        return "8px 16px";
      case "lg":
        return "16px 32px";
      default:
        return "12px 24px";
    }
  }};
  color: ${(props) => {
    switch (props.variant) {
      case "primary":
        return props.theme.colors.primary;
      case "secondary":
        return props.theme.colors.secondary;
      default:
        return props.theme.colors.text;
    }
  }};
  background-color: ${(props) => {
    switch (props.variant) {
      case "primary":
        return props.theme.colors.primary + '33'; 
      case "secondary":
        return props.theme.colors.secondary + '33';
      default:
        return props.theme.colors.primary + '33';
    }
  }};
`;

export default function CustomButton() {
  return (
    <StyledButton variant="secondary" size="md">
      查看详情
    </StyledButton>
  );
}
