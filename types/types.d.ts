import { TextInputProps } from "react-native";

declare interface ButtonProps extends TouchableHighlightProps{
    title: string;
    onPress: () => void;
    disabled?: boolean;
    style?: any;
    backgroundColor?: string;
    textColor?: string;
    IconLeft?: React.ComponentType<any>;
  
}

declare interface OTPInputProps {
    codes: string[];
    refs: RefObject<TextInput>[];
    errorMessages: string[] | undefined;
    onChangeCode: (text: string, index: number) => void;
  }

declare interface  InputFieldProps extends TextInputProps {
    label:string;
    labelStyle:string;
    icon?:any;
    iconStyle?;
    inputStyle?;
    style?:string;
    containerStyle:string;
    
   
    
}