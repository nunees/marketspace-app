import { Input as NativeInput, IInputProps, Icon } from "native-base";
import { Eye, Feather } from "phosphor-react-native";
import React, { useState } from "react";
import { Pressable, TouchableOpacity } from "react-native";

type Props = IInputProps & {
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  hasIcon?: boolean;
};

export function Input({
  placeholder,
  value,
  onChangeText,
  hasIcon,
  ...rest
}: Props) {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [icon, setIcon] = useState(<Eye size={20} color={"gray.400"} />);

  return (
    <NativeInput
      backgroundColor={"white"}
      borderWidth={0}
      borderRadius={5}
      mb={5}
      w={279}
      h={45}
      placeholder={placeholder}
      placeholderTextColor={"gray.400"}
      fontSize={"md"}
      value={value}
      onChangeText={onChangeText}
      _focus={{
        borderColor: "gray.300",
        borderWidth: 1,
      }}
      secureTextEntry={secureTextEntry}
      InputRightElement={
        <Pressable onPress={() => setSecureTextEntry(!!setSecureTextEntry)}>
          <Icon as={<Eye />} size={20} color={"gray.400"} />
        </Pressable>
      }
      {...rest}
    />
  );
}
