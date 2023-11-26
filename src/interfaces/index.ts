import { NavigationContext } from "@react-navigation/native";

export interface NavigationType {
	navigate: (route: string, params: any) => void;
	goBack: () => void;
}
