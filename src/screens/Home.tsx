import { Button } from "@components/Button";
import { Filter } from "@components/Filter";
import { Input } from "@components/Input";
import { ItemCard } from "@components/ItemCard";

import {
  HStack,
  ScrollView,
  Text,
  VStack,
  Avatar,
  Badge,
  Pressable,
  Divider,
  Icon,
} from "native-base";
import {
  Tag,
  ArrowRight,
  Plus,
  MagnifyingGlass,
  Sliders,
} from "phosphor-react-native";
import { SetStateAction, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export function Home() {
  const [showFilter, setShowFilter] = useState<boolean>(false);

  console.log("Home render");

  return (
    <SafeAreaView>
      {showFilter && (
        <Filter
          onClose={() => setShowFilter(!showFilter)}
          isOpen={showFilter}
        />
      )}

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
            <VStack mr={5}>
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

              <HStack ml={5}>
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
              InputRightElement={
                <HStack mr={5}>
                  <Pressable>
                    <Icon
                      as={<MagnifyingGlass />}
                      size={20}
                      color={"gray.200"}
                    />
                  </Pressable>
                  <Divider
                    borderColor={"gray.500"}
                    borderWidth={1}
                    orientation="vertical"
                    h={5}
                    mx={2}
                  />
                  <Pressable onPress={() => setShowFilter(!showFilter)}>
                    <Icon as={<Sliders />} size={20} color={"gray.200"} />
                  </Pressable>
                </HStack>
              }
            />
          </HStack>
        </VStack>

        <VStack mt={3} px={5}>
          <HStack justifyContent={"space-evenly"} flexWrap={"wrap"}>
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </HStack>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}
