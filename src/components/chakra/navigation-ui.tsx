import {
  Box,
  Flex,
  Link,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import { InfoIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { REM } from "next/font/google";

const rem = REM({ weight: "800", subsets: ["latin"] });

export default function NavigationUI() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box px={{ base: 8, md: 48 }}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Link
              href="/"
              textDecoration={"none"}
              _hover={{ textDecoration: "none" }}
            >
              <Text
                className={rem.className}
                color={"blue.600"}
                fontSize={"xl"}
              >
                QURANESIA
              </Text>
            </Link>
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={4} alignItems={"center"}>
              <Button w={8} onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Link href="https://posann.vercel.app" isExternal>
                <Button w={8}>
                  <InfoIcon />
                </Button>
              </Link>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
