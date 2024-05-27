// app/providers.tsx
"use client";

import NavigationUI from "@/components/chakra/navigation-ui";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <NavigationUI />
      <div className="container">{children}</div>
    </ChakraProvider>
  );
}
