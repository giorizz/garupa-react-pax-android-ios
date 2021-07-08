import { NavigationProp, ParamListBase } from "@react-navigation/native";

interface INavigationProps extends NavigationProp<ParamListBase> {
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;
}