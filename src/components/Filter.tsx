import {
  Actionsheet,
  HStack,
  IActionsheetProps,
  VStack,
  Text,
  Badge,
  Switch,
} from "native-base";
import { X } from "phosphor-react-native";

import { CheckBox } from "@components/CheckBox";
import { Button } from "./Button";

type Props = IActionsheetProps & {};

export function Filter({ ...rest }: Props) {
  return (
    <Actionsheet {...rest}>
      <Actionsheet.Content>
        <VStack w={327}>
          <HStack alignItems={"center"}>
            <HStack w={327} justifyContent={"space-between"}>
              <HStack>
                <Text bold fontSize={"md"}>
                  Filtro de anuncios
                </Text>
              </HStack>
              <HStack alignSelf={"end"}>
                <X size={20} />
              </HStack>
            </HStack>
          </HStack>

          <VStack mt={5}>
            <HStack mb={3}>
              <Text fontSize={"sm"} bold color="gray.300">
                Condicao
              </Text>
            </HStack>

            <HStack>
              <Badge
                background={"blue.500"}
                variant={"solid"}
                w={76}
                h={26}
                borderRadius={100}
                mr={3}
              >
                <HStack alignItems={"center"}>
                  <HStack>
                    <Text bold color="white" fontSize={"xs"} mr={1}>
                      NOVO
                    </Text>
                  </HStack>
                  <HStack backgroundColor={"white"} borderRadius={100}>
                    <X size={10} color="#647AC7" />
                  </HStack>
                </HStack>
              </Badge>

              <Badge
                background={"blue.500"}
                variant={"solid"}
                w={76}
                h={26}
                borderRadius={100}
              >
                <HStack alignItems={"center"}>
                  <HStack>
                    <Text bold color="white" fontSize={"xs"} mr={1}>
                      USADO
                    </Text>
                  </HStack>
                  <HStack backgroundColor={"white"} borderRadius={100}>
                    <X size={10} color="#647AC7" />
                  </HStack>
                </HStack>
              </Badge>
            </HStack>
          </VStack>

          <VStack mt={5} justifyItems={"flex-start"}>
            <VStack>
              <Text bold fontSize={"sm"}>
                Aceita troca?
              </Text>
            </VStack>
            <VStack w={50}>
              <Switch size={"lg"} />
            </VStack>
          </VStack>

          <VStack justifyItems={"flex-start"} mb={10}>
            <VStack mb={3}>
              <Text bold fontSize={"sm"}>
                Meios de pagamento aceitos
              </Text>
            </VStack>
            <VStack>
              <CheckBox value="1" text="Boleto" />
              <CheckBox value="2" text="PIX" />
              <CheckBox value="3" text="Dinheiro" />
              <CheckBox value="4" text="Cartao de credito" />
              <CheckBox value="5" text="Deposito bancario" />
            </VStack>
          </VStack>

          <VStack>
            <HStack justifyContent={"space-between"}>
              <Button
                w={160}
                h={42}
                variant={"gray"}
                text={"Resetar filtros"}
              />
              <Button
                w={160}
                h={42}
                variant={"black"}
                text={"Aplicar filtros"}
              />
            </HStack>
          </VStack>
        </VStack>
      </Actionsheet.Content>
    </Actionsheet>
  );
}
