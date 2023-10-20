import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Center, Text, Pressable, Icon } from "native-base";
import { Eye, PencilSimpleLine } from "phosphor-react-native";

import LogoSVG from "@assets/logo.svg";
import AvatarSVG from "@assets/avatar.svg";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignUp() {
  return (
    <SafeAreaView>
      <Center mt={5} px={10}>
        <LogoSVG width={60} height={40} />
        <Text bold fontFamily={"body"} fontSize={"lg"}>
          Boas vindas
        </Text>
        <Text fontSize={"sm"} color={"gray.200"} textAlign={"center"}>
          Crie sua conta e use o espaço para comprar itens variados e vender
          seus produtos
        </Text>
      </Center>

      <Center mt={5}>
        <Avatar w={88} h={88} borderWidth={3} borderColor={"blue.500"}>
          <AvatarSVG />

          <Avatar.Badge
            bg={"blue.500"}
            size={10}
            justifyContent={"center"}
            alignItems={"center"}
            borderWidth={0}
          >
            <Pressable
              onPress={() => console.log("OK")}
              _pressed={{
                opacity: 0.5,
              }}
            >
              <PencilSimpleLine size={16} color="white" />
            </Pressable>
          </Avatar.Badge>
        </Avatar>
      </Center>

      <Center mt={3} px={10}>
        <Input placeholder={"Nome"} />

        <Input placeholder={"E-mail"} />

        <Input placeholder={"Telefone"} />

        <Input
          placeholder={"Senha"}
          secureTextEntry
          InputRightElement={
            <Pressable>
              <Icon as={<Eye />} size={20} color={"gray.400"} mr={2} />
            </Pressable>
          }
        />

        <Input
          placeholder={"Confirmar senha"}
          secureTextEntry
          InputRightElement={
            <Pressable>
              <Icon as={<Eye />} size={20} color={"gray.400"} mr={2} />
            </Pressable>
          }
        />

        <Button variant={"black"} text={"Criar"} />
      </Center>

      <Center mt={50}>
        <Text fontSize={"md"} color="gray.200" pb={3}>
          Já tem uma conta?
        </Text>
        <Button
          variant={"gray"}
          text={"Ir para o login"}
          onPress={() => console.log("clicou")}
        />
      </Center>
    </SafeAreaView>
  );
}
