//components
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AspectRatio,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Button,
  ButtonGroup,
  Checkbox,
  CheckboxGroup,
  Code,
  Divider,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Highlight,
  Image,
  Input,
  Kbd,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  PinInput,
  PinInputField,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Progress,
  Radio,
  RadioGroup,
  Select,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Switch,
  Tab,
  Table,
  TableCaption,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Toast,
  Tooltip,
  Tr,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
  IconButton,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
} from "@chakra-ui/react";
import { 
  GolfIcon,
  BowlingIcon,
  ArcadeIcon,
  HijinxIcon,
  WondervilleIcon,
  KaraokeIcon,
  LaserIcon,
  DartsIcon,
  EscaperoomIcon,
  FunPassIcon,
  LocationPinIcon
} from "../../components/CustomIcons";
import ImageWithOverlay from "../../components/ImageWithOverlay";
import ChakraDocs from "../../components/ChakraDocs";

// Registrations
import { Registerable } from "./registerable";
import registerComponent, {
  ComponentMeta,
} from "@plasmicapp/host/registerComponent";
import {
  accordionButtonMeta,
  accordionIconMeta,
  accordionItemMeta,
  accordionMeta,
  accordionPanelMeta,
} from "./registerAccordion";
import { aspectRatioMeta } from "./registerAspectRatio";
import { avatarBadgeMeta, avatarGroupMeta, avatarMeta } from "./registerAvatar";
import { badgeMeta } from "./registerBadge";
import {
  breadcrumbItemMeta,
  breadcrumbLinkMeta,
  breadcrumbMeta,
  breadcrumbSeparatorMeta,
} from "./registerBreadcrumb";
import { buttonGroupMeta, buttonMeta } from "./registerButton";
import { registerChakraProvider } from "./registerChakraProvider";
import { checkboxGroupMeta, checkboxMeta } from "./registerCheckBox";
import { codeMeta } from "./registerCode";
import { dividerMeta } from "./registerDivider";
import {
  formControlMeta,
  formErrorMessageMeta,
  formHelperTextMeta,
  formLabelMeta,
} from "./registerFormControl";
import { headingMeta } from "./registerHeading";
import { highlightMeta } from "./registerHighlight";
import { imageMeta } from "./registerImage";
import { inputMeta } from "./registerInput";
import { kbdMeta } from "./registerKbd";
import {
  Modal,
  modalBodyMeta,
  modalCloseButtonMeta,
  modalContentMeta,
  modalFooterMeta,
  modalHeaderMeta,
  modalMeta,
  modalOverlayMeta,
} from "./registerModal";
import {
  numberDecrementStepperMeta,
  numberIncrementStepperMeta,
  numberInputFieldMeta,
  numberInputMeta,
  numberInputStepperMeta,
} from "./registerNumberInput";
import { pinInputFieldMeta, pinInputMeta } from "./registerPinInput";
import {
  popoverArrowMeta,
  popoverBodyMeta,
  popoverCloseButtonMeta,
  popoverContentMeta,
  popoverHeaderMeta,
  popoverMeta,
  popoverTriggerMeta,
} from "./registerPopover";
import { progressMeta } from "./registerProgress";
import { radioGroupMeta, radioMeta } from "./registerRadio";
import { Option, optionMeta, selectMeta } from "./registerSelect";
import {
  statArrowMeta,
  statHelpTextMeta,
  statLabelMeta,
  statMeta,
  statNumberMeta,
} from "./registerStat";
import { switchMeta } from "./registerSwitch";
import {
  tableCaptionMeta,
  tableContainerMeta,
  tableMeta,
  tbodyMeta,
  tdMeta,
  tfootMeta,
  theadMeta,
  thMeta,
  trMeta,
} from "./registerTable";
import {
  tabListMeta,
  tabMeta,
  tabPanelMeta,
  tabPanelsMeta,
  tabsMeta,
} from "./registerTabs";
import { textMeta } from "./registerText";
import { toastMeta } from "./registerToast";
import { tooltipMeta } from "./registerTooltip";
import {
  tagMeta,
  tagLeftIconMeta,
  tagLabelMeta,
  tagRightIconMeta,
  tagCloseButtonMeta,
} from "./registerTag";
import {iconButtonMeta} from "./registerIconButton";
import {golfIconMeta} from "./registerGolfIcon";
import {bowlingIconMeta} from "./registerBowlingIcon";
import {arcadeIconMeta} from "./registerArcadeIcon";
import {hijinxIconMeta} from "./registerHijinxIcon";
import {wondervilleIconMeta} from "./registerWondervilleIcon";
import {karaokeIconMeta} from "./registerKaraokeIcon";
import {laserIconMeta} from "./registerLaserIcon";
import {dartsIconMeta} from "./registerDartsIcon";
import {escaperoomIconMeta} from "./registerEscaperoomIcon";
import {funPassIconMeta} from "./registerFunPassIcon";
import {locationPinIconMeta} from "./registerLocationPinIcon";
import {imageWithOverlayMeta} from "./registerImageWithOverlay";
import {
  cardMeta,
  cardHeaderMeta,
  cardBodyMeta,
  cardFooterMeta
} from "./registerCard";
import {stackMeta} from "./registerStack";
import {chakraDocsMeta} from "./registerChakraDocs";

// import {
//   iconsMeta,
// } from "./registerIcons";

export * from "./registerable";
export * from "./registerAccordion";
export * from "./registerAspectRatio";
export * from "./registerAvatar";
export * from "./registerBadge";
export * from "./registerBreadcrumb";
export * from "./registerButton";
export * from "./registerChakraProvider";
export * from "./registerCheckBox";
export * from "./registerCode";
export * from "./registerDivider";
export * from "./registerFormControl";
export * from "./registerHeading";
export * from "./registerHighlight";
export * from "./registerImage";
export * from "./registerInput";
export * from "./registerKbd";
export * from "./registerNumberInput";
export * from "./registerPinInput";
export * from "./registerPopover";
export * from "./registerProgress";
export * from "./registerRadio";
export * from "./registerSelect";
export * from "./registerStat";
export * from "./registerSwitch";
export * from "./registerTable";
export * from "./registerTabs";
export * from "./registerText";
export * from "./registerToast";
export * from "./registerTooltip";
export * from "./registerTag";
export * from "./registerIconButton";
export * from "./registerIcons";
export * from "./registerGolfIcon";
export * from "./registerArcadeIcon";
export * from "./registerBowlingIcon";
export * from "./registerEscaperoomIcon";
export * from "./registerFunPassIcon";
export * from "./registerHijinxIcon";
export * from "./registerKaraokeIcon";
export * from "./registerLaserIcon";
export * from "./registerWondervilleIcon";
export * from "./registerDartsIcon";
export * from "./registerImageWithOverlay";
export * from "./registerCard";
export * from "./registerStack";
export * from "./registerChakraDocs";

export function registerAll(loader?: Registerable) {
  const _registerComponent = <T extends React.ComponentType<any>>(
    Component: T,
    defaultMeta: ComponentMeta<React.ComponentProps<T>>
  ) => {
    if (loader) {
      loader.registerComponent(Component, defaultMeta);
    } else {
      registerComponent(Component, defaultMeta);
    }
  };
  registerChakraProvider(loader);

   // Plasmic Chakra-UI components
  _registerComponent(Accordion, accordionMeta);
  _registerComponent(AccordionButton, accordionButtonMeta);
  _registerComponent(AccordionIcon, accordionIconMeta);
  _registerComponent(AccordionItem, accordionItemMeta);
  _registerComponent(AccordionPanel, accordionPanelMeta);
  _registerComponent(AspectRatio, aspectRatioMeta);
  _registerComponent(Avatar, avatarMeta);
  _registerComponent(AvatarBadge, avatarBadgeMeta);
  _registerComponent(AvatarGroup, avatarGroupMeta);
  _registerComponent(Badge, badgeMeta);
  _registerComponent(Breadcrumb, breadcrumbMeta);
  _registerComponent(BreadcrumbItem, breadcrumbItemMeta);
  _registerComponent(BreadcrumbLink, breadcrumbLinkMeta);
  _registerComponent(BreadcrumbSeparator, breadcrumbSeparatorMeta);
  _registerComponent(Button, buttonMeta);
  _registerComponent(ButtonGroup, buttonGroupMeta);
  _registerComponent(Checkbox, checkboxMeta);
  _registerComponent(CheckboxGroup, checkboxGroupMeta);
  _registerComponent(Code, codeMeta);
  _registerComponent(Divider, dividerMeta);
  _registerComponent(FormControl, formControlMeta);
  _registerComponent(FormErrorMessage, formErrorMessageMeta);
  _registerComponent(FormHelperText, formHelperTextMeta);
  _registerComponent(FormLabel, formLabelMeta);
  _registerComponent(Heading, headingMeta);
  _registerComponent(Highlight, highlightMeta);
  _registerComponent(Image, imageMeta);
  _registerComponent(Input, inputMeta);
  _registerComponent(Kbd, kbdMeta);
  _registerComponent(Modal, modalMeta);
  _registerComponent(ModalOverlay, modalOverlayMeta);
  _registerComponent(ModalContent, modalContentMeta);
  _registerComponent(ModalHeader, modalHeaderMeta);
  _registerComponent(ModalBody, modalBodyMeta);
  _registerComponent(ModalFooter, modalFooterMeta);
  _registerComponent(ModalCloseButton, modalCloseButtonMeta);
  _registerComponent(NumberInput, numberInputMeta);
  _registerComponent(NumberDecrementStepper, numberDecrementStepperMeta);
  _registerComponent(NumberIncrementStepper, numberIncrementStepperMeta);
  _registerComponent(NumberInputField, numberInputFieldMeta);
  _registerComponent(NumberInputStepper, numberInputStepperMeta);
  _registerComponent(Option, optionMeta);
  _registerComponent(Select, selectMeta);
  _registerComponent(PinInput, pinInputMeta);
  _registerComponent(PinInputField, pinInputFieldMeta);
  _registerComponent(Popover, popoverMeta);
  _registerComponent(PopoverBody, popoverBodyMeta);
  _registerComponent(PopoverArrow, popoverArrowMeta);
  _registerComponent(PopoverCloseButton, popoverCloseButtonMeta);
  _registerComponent(PopoverContent, popoverContentMeta);
  _registerComponent(PopoverHeader, popoverHeaderMeta);
  _registerComponent(PopoverTrigger, popoverTriggerMeta);
  _registerComponent(Progress, progressMeta);
  _registerComponent(Radio, radioMeta);
  _registerComponent(RadioGroup, radioGroupMeta);
  _registerComponent(Stat, statMeta);
  _registerComponent(StatArrow, statArrowMeta);
  _registerComponent(StatHelpText, statHelpTextMeta);
  _registerComponent(StatLabel, statLabelMeta);
  _registerComponent(StatNumber, statNumberMeta);
  _registerComponent(Switch, switchMeta);
  _registerComponent(Table, tableMeta);
  _registerComponent(TableCaption, tableCaptionMeta);
  _registerComponent(Tbody, tbodyMeta);
  _registerComponent(Thead, theadMeta);
  _registerComponent(Tfoot, tfootMeta);
  _registerComponent(Td, tdMeta);
  _registerComponent(Th, thMeta);
  _registerComponent(Tr, trMeta);
  _registerComponent(TableContainer, tableContainerMeta);
  _registerComponent(Text, textMeta);
  _registerComponent(Toast, toastMeta);
  _registerComponent(Tooltip, tooltipMeta);
  _registerComponent(TabList, tabListMeta);
  _registerComponent(Tab, tabMeta);
  _registerComponent(Tabs, tabsMeta);
  _registerComponent(TabPanel, tabPanelMeta);
  _registerComponent(TabPanels, tabPanelsMeta);
  _registerComponent(Card, cardMeta);
  _registerComponent(CardHeader, cardHeaderMeta);
  _registerComponent(CardBody, cardBodyMeta);
  _registerComponent(CardFooter, cardFooterMeta);
  _registerComponent(Stack, stackMeta);

  // Added 
  // Chakra-UI components
  _registerComponent(Tag, tagMeta);
  _registerComponent(TagLeftIcon, tagLeftIconMeta);
  _registerComponent(TagLabel, tagLabelMeta);
  _registerComponent(TagRightIcon, tagRightIconMeta);
  _registerComponent(TagCloseButton, tagCloseButtonMeta);
  _registerComponent(IconButton, iconButtonMeta);
  _registerComponent(ImageWithOverlay, imageWithOverlayMeta);
  _registerComponent(ChakraDocs, chakraDocsMeta);
  //Custom icons
  _registerComponent(GolfIcon, golfIconMeta);
  _registerComponent(BowlingIcon, bowlingIconMeta);
  _registerComponent(ArcadeIcon, arcadeIconMeta);
  _registerComponent(HijinxIcon, hijinxIconMeta);
  _registerComponent(WondervilleIcon, wondervilleIconMeta);
  _registerComponent(KaraokeIcon, karaokeIconMeta);
  _registerComponent(LaserIcon, laserIconMeta);
  _registerComponent(EscaperoomIcon, escaperoomIconMeta);
  _registerComponent(FunPassIcon, funPassIconMeta);
  _registerComponent(LocationPinIcon, locationPinIconMeta);
  _registerComponent(DartsIcon, dartsIconMeta);
  // _registerComponent(Icons, iconsMeta);
}
