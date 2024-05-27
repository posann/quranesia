import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

export const SearchBar = ({ placeholder, onChange }: any) => (
  <InputGroup>
    <InputLeftElement pointerEvents="none">
      <SearchIcon color="gray.300" />
    </InputLeftElement>
    <Input
      type="text"
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  </InputGroup>
);
