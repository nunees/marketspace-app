import { Center, Spinner } from "native-base";

export function Loading() {
  return (
    <Center flex={1}>
      <Spinner colorScheme={"gray"} size={40} />
    </Center>
  );
}
