import React, { useCallback, useState, useRef } from "react";
import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  useColorModeValue,
  InputLeftElement,
  Button,
  keyframes,
} from "@chakra-ui/react";
import { Search2Icon, CloseIcon } from "@chakra-ui/icons";
import { PiMagnifyingGlassMinusBold } from "react-icons/pi";

export const SearchInput = ({ simple, gridRef }) => {
  const searchInputRef = useRef(null);
  const onQuickFilterChanged = useCallback(() => {
    gridRef.current.api.setGridOption(
      "quickFilterText",
      searchInputRef.current.value
    );
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const toggleCloseOpen = () => {
    setIsOpen(!isOpen);
  };
  const clearInput = () => {
    searchInputRef.current.value = "";
    gridRef.current.api.setGridOption("quickFilterText", null);
  };

  return (
    <>
      {simple ? (
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
          >
            <Search2Icon color={"#0F70FF"} />
          </InputLeftElement>
          <Input
            onInput={onQuickFilterChanged}
            ref={searchInputRef}
            placeholder={"Search..."}
            bg={useColorModeValue("#EBEBEB", "#1A1A1A !important")}
          />
          <InputRightElement minW={"150px"}>
            <Button
              onClick={clearInput}
              bg={"#6B6A6A"}
              fontWeight={400}
              minW={"150px"}
            >
              Clear
            </Button>
          </InputRightElement>
        </InputGroup>
      ) : (
        <InputGroup
          borderRadius={0}
          transition="width 0.3s cubic-bezier(0.9, 0, 0.3, 0.9)"
          w={isOpen ? "340px" : "40px"}
        >
          <Input
            pr={isOpen && "80px"}
            borderRadius={0}
            onInput={onQuickFilterChanged}
            ref={searchInputRef}
            py={0}
            pl={isOpen ? 2 : 0}
            placeholder={isOpen && "Search..."}
            border={
              isOpen
                ? useColorModeValue("1px solid #c3c3c3", "1px solid #2c2c2c")
                : "none"
            }
          />
          <InputRightElement w={isOpen ? "80px" : "40px"}>
            {isOpen && (
              <IconButton
                onClick={clearInput}
                borderRadius={0}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                _hover={{ opacity: 0.8 }}
                w={"40px"}
                aria-label={"Clear Search"}
                fontSize={10}
                icon={<CloseIcon />}
                variant="unstyled"
                color={useColorModeValue("#000000", "#ffffff")}
                opacity={0} /* Initially hidden */
                animation={`${keyframes`
                  from { opacity: 0; }
                  to { opacity: 1; }
                `} 2s forwards`}
              />
            )}
            <IconButton
              borderRadius={0}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              _hover={{ opacity: 0.8 }}
              w={"40px"}
              aria-label={isOpen ? "Close search" : "Open search"}
              fontSize={isOpen ? 20 : 15}
              icon={isOpen ? <PiMagnifyingGlassMinusBold /> : <Search2Icon />}
              onClick={toggleCloseOpen}
              variant="unstyled"
              bg={"#1f7240"}
              color={"#65b083"}
            />
          </InputRightElement>
        </InputGroup>
      )}
    </>
  );
};
