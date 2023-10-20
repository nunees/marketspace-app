import {
  Input as NativeInput,
  IInputProps,
  Icon,
  Divider,
  Box,
  HStack,
} from "native-base";
import {
  Divide,
  Eye,
  Feather,
  MagnifyingGlass,
  Sliders,
} from "phosphor-react-native";
import React, { useState } from "react";
import { Pressable, TouchableOpacity } from "react-native";

type Props = IInputProps & {
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  isPasswordField?: boolean;
  isSearchField?: boolean;
};

export function Input({
  placeholder,
  value,
  onChangeText,
  isPasswordField,
  isSearchField,
  ...rest
}: Props) {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <HStack>
      {isSearchField && (
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
            <HStack mr={5}>
              <Icon as={<MagnifyingGlass />} size={20} color={"gray.200"} />
              <Divider
                borderColor={"gray.500"}
                borderWidth={1}
                orientation="vertical"
                h={5}
                mx={2}
              />
              <Icon as={<Sliders />} size={20} color={"gray.200"} />
            </HStack>
          }
          {...rest}
        />
      )}

      {isPasswordField && (
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
            isPasswordField && (
              <Pressable
                onPress={() => setSecureTextEntry(!!setSecureTextEntry)}
              >
                <Icon as={<Eye />} size={20} color={"gray.400"} mr={2} />
              </Pressable>
            )
          }
          {...rest}
        />
      )}
    </HStack>
  );
}
