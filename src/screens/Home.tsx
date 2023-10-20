import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ItemCard } from "@components/ItemCard";
import { HStack, ScrollView, Text, VStack, Avatar, Badge } from "native-base";
import { Tag, ArrowRight, Plus } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Home() {
  return (
    <SafeAreaView>
      <ScrollView mt={5}>
        <VStack px={5}>
          <HStack justifyContent={"space-between"}>
            <VStack>
              <Avatar
                source={{
                  uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                }}
                w={45}
                h={45}
              />
            </VStack>
            <VStack mr={10}>
              <Text fontSize={"md"}>Boas vindas,</Text>
              <Text fontSize={"md"} bold>
                Maria!
              </Text>
            </VStack>

            <VStack>
              <Button
                variant="black"
                text="Criar anúncio"
                w={139}
                h={42}
                onPress={() => {}}
                icon={<Plus size={20} color="white" />}
              />
            </VStack>
          </HStack>
        </VStack>

        <VStack mt={5} px={5}>
          <VStack mb={3}>
            <Text fontSize={"md"} color={"gray.300"}>
              Seus produtos anunciados para venda
            </Text>
          </VStack>

          <Badge
            colorScheme={"blue"}
            borderRadius={6}
            justifyContent={"space-between"}
          >
            <HStack alignItems={"center"} px={5} py={3}>
              <HStack mr={5}>
                <Tag color="#364D9D" />
              </HStack>
              <HStack>
                <VStack>
                  <Text fontSize={"lg"} bold>
                    4
                  </Text>
                  <Text fontSize={"xs"} color={"gray.300"}>
                    anúncios ativos
                  </Text>
                </VStack>
              </HStack>

              <HStack ml={10}>
                <Text color="blue.900" bold>
                  Meus anúncios
                </Text>
                <ArrowRight
                  size={20}
                  color="#364D9D"
                  style={{
                    marginLeft: 5,
                  }}
                />
              </HStack>
            </HStack>
          </Badge>
        </VStack>

        <VStack mt={5} px={5}>
          <Text fontSize={"md"} color={"gray.300"} mb={3}>
            Compre produtos variados
          </Text>
          <HStack>
            <Input
              placeholder="Buscar anúncio"
              w={"full"}
              h={45}
              isSearchField
            />
          </HStack>
        </VStack>

        <VStack mt={3} px={10}>
          <VStack w={330}>
            <HStack flexWrap={"wrap"} justifyContent={"space-between"}>
              <ItemCard />

              <ItemCard />

              <ItemCard />

              <ItemCard />

              <ItemCard />

              <ItemCard />
            </HStack>
          </VStack>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}
