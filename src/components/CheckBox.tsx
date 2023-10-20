import {
  HStack,
  Checkbox as NativeCheckBox,
  ICheckboxProps,
} from "native-base";

type Props = ICheckboxProps & {
  text: string;
};

export function CheckBox({ text, ...rest }: Props) {
  return (
    <HStack mb={4} w={327}>
      <NativeCheckBox
        borderRadius={0}
        borderWidth={1}
        borderColor={"gray.400"}
        _checked={{
          backgroundColor: "blue.500",
          borderColor: "blue.500",
        }}
        _focus={{
          borderColor: "blue.500",
        }}
        p={1}
        {...rest}
      >
        {text}
      </NativeCheckBox>
    </HStack>
  );
}
