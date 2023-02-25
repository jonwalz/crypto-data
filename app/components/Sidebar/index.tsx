import {
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
} from "@chakra-ui/react";
import { FC } from "react";
import { NavLink as RemixLink } from "remix";

interface LinkItemProps {
  name: string;
  href: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Screener", href: "/screener" },
  { name: "Watchlist", href: "/watchlist" },
  { name: "Alerts", href: "/alerts" },
  { name: "Details", href: "/details" },
];

export default function SidebarWithHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg="brand.300">
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }}>{children}</Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={"brand.300"}
      borderRight="1px"
      borderRightColor="brand.500"
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="6" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Dig
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} href={link.href}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  children: React.ReactText;
  href: string;
}
const NavItem = ({ children, href, ...rest }: NavItemProps) => {
  return (
    <RemixLink
      to={href}
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      <Link
        as="span"
        style={{ textDecoration: "none" }}
        _focus={{ boxShadow: "none" }}
      >
        <Flex
          align="center"
          p="2"
          px="3"
          mx="4"
          borderRadius="sm"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "brand.400",
            color: "white",
          }}
          {...rest}
        >
          {children}
        </Flex>
      </Link>
    </RemixLink>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={"brand.300"}
      borderBottomWidth="1px"
      borderBottomColor={"brand.500"}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <Button
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Dig
      </Text>

      <HStack spacing={{ base: "0", md: "6" }}>
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar size={"sm"} />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">Connected</Text>
                </VStack>
              </HStack>
            </MenuButton>
            <MenuDropdown />
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

const menuItems = [
  // Leaving these for future implementation
  // { name: 'Profile', href: '/profile' },
  // { name: 'Settings', href: '/settings' },
  // { name: 'Billing', href: '/billing' },
  { name: "Sign out", href: "/sign-out" },
];

const MenuDropdown: FC = () => {
  return (
    <MenuList bg="brand.800" borderColor="gray.200">
      {menuItems.map(({ name, href }, i) => (
        <MenuItem
          as="a"
          href={href}
          key={i}
          _focus={{
            bg: "brand.700",
            color: "white",
          }}
          _hover={{
            bg: "brand.700",
            color: "white",
          }}
        >
          {name}
        </MenuItem>
      ))}
    </MenuList>
  );
};
