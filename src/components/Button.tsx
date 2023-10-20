import { Button as NativeButton, IButtonProps, Text } from "native-base";

type Props = IButtonProps & {
  onPress?: () => void;
  text: string;
  variant: "black" | "blue" | "gray";
  icon?: JSX.Element;
};

export function Button({ onPress, text, variant, icon, ...rest }: Props) {
  return (
    <NativeButton
      backgroundColor={
        variant === "black"
          ? "black"
          : variant === "blue"
          ? "blue.500"
          : variant === "gray"
          ? "gray.500"
          : "red.500"
      }
      borderRadius={5}
      w={279}
      h={45}
      onPress={onPress}
      leftIcon={icon && icon}
      {...rest}
    >
      <Text
        bold
        color={
          variant === "black"
            ? "gray.700"
            : variant === "blue"
            ? "gray.700"
            : "gray.200"
        }
        fontSize={"sm"}
      >
        {text}
      </Text>
    </NativeButton>
  );
}
