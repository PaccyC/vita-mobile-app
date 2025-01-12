declare interface ButtonProps extends TouchableHighlightProps{
    title: string;
    onPress: () => void;
    disabled?: boolean;
    style?: any;
    backgroundColor?: string;
    textColor?: string;
    IconLeft?: React.ComponentType<any>;
  
}
