import React from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  HStack,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { BsCart } from "react-icons/bs";
import { useDispatch} from "react-redux";
import { getData } from "../../../Redux/GetData/getData.actions";
import { getButton } from "../../../Redux/ButtonRoute/button.action";
import { Login } from "../../../Pages/Authentication/Login";

export default function CultStoreNavbar() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color=" #262626"
        fontFamily="sans-serif"
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          align={"center"}
        >
          <Box>
            <Image
              w="120px"
              src="https://i.ibb.co/10DhWcm/Screenshot-2022-11-08-163641-removebg-preview.png"
            />
          </Box>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <HStack flex={{ base: 1, md: 0 }} justify={"flex-end"} spacing={3}>
          <Login />
          <Button
            fontSize={"sm"}
            fontWeight={200}
            variant={"link"}
            href={"#"}
            color="black"
          >
            <BsCart fontSize={"30px"} />
          </Button>
        </HStack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", " #262626");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                fontWeight="bold"
                fontSize="13px"
                p={2}
                color="#262626"
                href={navItem.href ?? "#"}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                fontWeight="600"
                fontSize="12px"
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={2}
                w="fit-content"
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel, route }) => {
  const dispatch = useDispatch();

  const handleRoute = (route) => {
    dispatch(getData(route));
    dispatch(getButton(route));
  };

  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
      onClick={() => handleRoute(route)}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          {/* <Button> */}
          <Text
            transition={"all .9s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={600}
          >
            {label}
          </Text>
          {/* </Button> */}
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          color={useColorModeValue("gray.600", "gray.200")}
          fontWeight="600"
          fontSize="12px"
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Best Sellers",
    children: [
      {
        label: "Top Selling",
        href: "#",
        route: "topSellings",
      },
    ],
    route: "topSellings",
  },
  {
    label: "Just Launched",
    children: [
      {
        label: "New Arrivals",
        href: "#",
        route: "topArrivals",
      },
    ],
    route: "topArrivals",
  },
  {
    label: "Men",
    children: [
      {
        label: "Apparel",
        href: "#",
        route: "mens",
      },
      {
        label: "T-Shirts",
        href: "#",
        route: "mens",
      },
      {
        label: "Joggers and Track Pants",
        href: "#",
        route: "mens",
      },
      {
        label: "Jackets and Sweatshirts",
        href: "#",
        route: "mens",
      },
      {
        label: "Shorts",
        href: "#",
        route: "mens",
      },
    ],
    route: "mens",
  },
  {
    label: "Women",
    children: [
      {
        label: "Apparel",
        href: "#",
        route: "womens",
      },
      {
        label: "T-Shirts",
        href: "#",
        route: "womens",
      },
      {
        label: "Sports Bra",
        href: "#",
        route: "womens",
      },
      {
        label: "Tights",
        href: "#",
        route: "womens",
      },
      {
        label: "Shorts",
        href: "#",
        route: "womens",
      },
      {
        label: "Joggers",
        href: "#",
        route: "womens",
      },
      {
        label: "Jackets and Sweatshirts",
        href: "#",
        route: "womens",
      },
      {
        label: "BoyShorts",
        href: "#",
        route: "womens",
      },
    ],
    route: "womens",
  },
  {
    label: "Footwear",
    children: [
      {
        label: "All",
        href: "#",
        route: "footwears",
      },
      {
        label: "Men's Footwear",
        href: "#",
        route: "footwears",
      },
      {
        label: "Women's Footwear",
        href: "#",
        route: "footwears",
      },
    ],
    route: "footwears",
  },
  {
    label: "Cardio",
    children: [
      {
        label: "All",
        href: "#",
        route: "cardio",
      },
      {
        label: "Spinbikes",
        href: "#",
        route: "cardio",
      },
      {
        label: "Treadmills",
        href: "#",
        route: "cardio",
      },
      {
        label: "Rower",
        href: "#",
        route: "cardio",
      },
    ],
    route: "cardio",
  },
  {
    label: "Cycles",
    children: [
      {
        label: "All",
        href: "#",
        route: "cycles",
      },
      {
        label: "Geared Cycles",
        href: "#",
        route: "cycles",
      },
      {
        label: "Sinhle speed cycles",
        href: "#",
        route: "cycles",
      },
      {
        label: "Electric cycles",
        href: "#",
        route: "cycles",
      },
      {
        label: "kids cycles",
        href: "#",
        route: "cycles",
      },
    ],
    route: "cycles",
  },
  {
    label: "Accessories",
    children: [
      {
        label: "All",
        href: "#",
        route: "accessories",
      },
      {
        label: "Towel",
        href: "#",
        route: "accessories",
      },
      {
        label: "Gloves",
        href: "#",
        route: "accessories",
      },
      {
        label: "Mask",
        href: "#",
        route: "accessories",
      },
      {
        label: "Duffle Bag",
        href: "#",
        route: "accessories",
      },
      {
        label: "Socks",
        href: "#",
        route: "accessories",
      },
      {
        label: "Yoga Mat",
        href: "#",
        route: "accessories",
      },
      {
        label: "Jumping Rope",
        href: "#",
        route: "accessories",
      },
    ],
    route: "accessories",
  },
  {
    label: "Supplements",
    children: [
      {
        label: "All",
        href: "#",
        route: "supplements",
      },
      {
        label: "Personal cares",
        href: "#",
        route: "supplements",
      },
      {
        label: "Protein",
        href: "#",
        route: "supplements",
      },
      {
        label: "Snacks",
        href: "#",
        route: "supplements",
      },
      {
        label: "Staples",
        href: "#",
        route: "supplements",
      },
      {
        label: "Vitamins",
        href: "#",
        route: "supplements",
      },
      {
        label: "Weight loss",
        href: "#",
        route: "supplements",
      },
      {
        label: "Immunity",
        href: "#",
        route: "supplements",
      },
      {
        label: "Muscle recovery",
        href: "#",
        route: "supplements",
      },
    ],
    route: "supplements",
  },
  {
    label: "Equipments",
    children: [
      {
        label: "All",
        href: "#",
        route: "equipments",
      },
      {
        label: "Strenghts",
        href: "#",
        route: "equipments",
      },
      {
        label: "Others",
        href: "#",
        route: "equipments",
      },
    ],
    route: "equipments",
  },
];
