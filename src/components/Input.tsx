import {
  Input as NativeInput,
  IInputProps,
  Icon,
  Divider,
  Box,
  HStack,
  Pressable,
} from "native-base";
import {
  Divide,
  Eye,
  Feather,
  MagnifyingGlass,
  Sliders,
} from "phosphor-react-native";
import React, { useState } from "react";

type Props = IInputProps & {};

export function Input({ ...rest }: Props) {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <HStack>
      <NativeInput
        backgroundColor={"white"}
        borderWidth={0}
        borderRadius={5}
        mb={5}
        w={279}
        h={45}
        placeholderTextColor={"gray.400"}
        fontSize={"md"}
        _focus={{
          borderColor: "gray.300",
          borderWidth: 1,
        }}
        {...rest}
      />
    </HStack>
  );
}
