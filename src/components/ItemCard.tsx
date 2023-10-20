import { VStack, Text, Image, HStack, Avatar, Badge } from "native-base";

export function ItemCard() {
  return (
    <VStack w={160} h={150} mb={3}>
      <HStack>
        <HStack>
          <Image
            source={{ uri: "https://wallpaperaccess.com/full/317501.jpg" }}
            alt="image base"
            w={153}
            h={100}
            borderRadius={10}
          />
        </HStack>

        <HStack position={"absolute"} top={2} left={2}>
          <Avatar
            source={{
              uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            }}
            w={8}
            h={8}
            borderWidth={2}
            borderColor={"white"}
          />
        </HStack>
        <HStack position={"absolute"} top={2} right={2}>
          <Badge
            backgroundColor={"blue.900"}
            variant={"solid"}
            rounded={20}
            px={3}
          >
            <Text fontSize={"xs"} color="white" bold>
              NOVO
            </Text>
          </Badge>
        </HStack>
      </HStack>
      <HStack>
        <VStack>
          <Text fontSize={"sm"} color={"gray.200"}>
            Tenis Vermelho
          </Text>
          <Text fontSize={"xs"} color={"gray.100"}>
            R${" "}
            <Text color={"gray.100"} fontSize={"md"}>
              59,90
            </Text>
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );
}
