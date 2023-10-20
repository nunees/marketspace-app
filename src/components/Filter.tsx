import {
  Actionsheet,
  HStack,
  IActionsheetProps,
  VStack,
  Text,
} from "native-base";
import { X } from "phosphor-react-native";

type Props = IActionsheetProps & {};

export function Filter({ ...rest }: Props) {
  return (
    <Actionsheet {...rest}>
      <Actionsheet.Content borderWidth={1}>
        <VStack>
          <HStack alignItems={"center"} justifyContent={"space-between"}>
            <Text>Filtro de anuncios</Text>
            <X size={20} />
          </HStack>
        </VStack>
      </Actionsheet.Content>
    </Actionsheet>
  );
}
