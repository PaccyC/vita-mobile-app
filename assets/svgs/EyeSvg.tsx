import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect, SvgProps } from "react-native-svg";
const EyeSvg = (props:SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <G clipPath="url(#clip0_192_869)">
      <Path
        d="M9.34203 18.782L7.41103 18.264L8.19803 15.325C7.01999 14.8905 5.92514 14.2573 4.96103 13.453L2.80803 15.607L1.39303 14.192L3.54703 12.039C2.3311 10.5827 1.51411 8.83575 1.17603 6.96899L3.14403 6.60999C3.90303 10.812 7.57903 14 12 14C16.42 14 20.097 10.812 20.856 6.60999L22.824 6.96799C22.4864 8.835 21.6697 10.5824 20.454 12.039L22.607 14.192L21.192 15.607L19.039 13.453C18.0749 14.2573 16.9801 14.8905 15.802 15.325L16.589 18.265L14.658 18.782L13.87 15.842C12.6324 16.0541 11.3677 16.0541 10.13 15.842L9.34203 18.782Z"
        fill="#111927"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_192_869">
        <Rect width={24} height={24} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default EyeSvg;
