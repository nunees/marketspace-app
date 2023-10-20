import { VStack, Text, Center, Heading, Box, Flex } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

import LogoSVG from "@assets/logo.svg";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

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
            <Input placeholder="E-mail" />
            <Input placeholder="Senha" isPasswordField />

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
