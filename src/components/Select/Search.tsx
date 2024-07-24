import { ChangeEventHandler } from "react";
import { SearchInput } from "./style";

interface SearchProps {
  onSearch: ChangeEventHandler<HTMLInputElement>;
}

export const Search = ({ onSearch }: SearchProps) => {
  return <SearchInput onChange={onSearch} placeholder="Search options here.." type="search" />;
};
