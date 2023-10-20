import {
  VStack,
  Text,
  Center,
  Heading,
  Box,
  Flex,
  Pressable,
  Icon,
} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

import LogoSVG from "@assets/logo.svg";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Eye } from "phosphor-react-native";

export function SignIn() {
  return (
    <Box>
      <VStack borderBottomRadius={30} backgroundColor={"gray.600"} pb={70}>
        <VStack>
          <Center mt={20}>
            <LogoSVG />
            <Heading size="xl" fontFamily={"body"} color="gray.100">
              marketspace
            </Heading>
            <Text color={"gray.300"}>Seu espaco de compra e venda</Text>
          </Center>

          <Center mt={110} px={10}>
            <Text pb={5} fontSize={"sm"} color="gray.100">
              Acesse sua conta
            </Text>
            <Input
              placeholder="E-mail"
              InputRightElement={
                <Pressable>
                  <Icon as={<Eye />} size={20} color={"gray.400"} mr={2} />
                </Pressable>
              }
            />
            <Input
              placeholder="Senha"
              isPasswordField
              InputRightElement={
                <Pressable>
                  <Icon as={<Eye />} size={20} color={"gray.400"} mr={2} />
                </Pressable>
              }
            />

            <Button variant={"blue"} text={"Entrar"} />
          </Center>
        </VStack>
      </VStack>

      <VStack>
        <Center mt={50}>
          <Text fontSize={"md"} color="gray.200" pb={5}>
            Ainda nao tem acesso?
          </Text>
          <Button
            variant={"gray"}
            text={"Criar uma conta"}
            onPress={() => console.log("clicou")}
          />
        </Center>
      </VStack>
    </Box>
  );
}
