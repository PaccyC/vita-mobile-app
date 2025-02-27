import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect, SvgProps } from "react-native-svg";
const TimerSvg = (props:SvgProps) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <G clipPath="url(#clip0_3_2605)">
      <Path
        d="M14.6817 4.97337L15.8925 3.76254L17.0708 4.94087L15.86 6.15171C17.0565 7.64935 17.6341 9.54827 17.4742 11.4585C17.3144 13.3687 16.4292 15.1452 15.0004 16.4231C13.5717 17.7011 11.7078 18.3835 9.79166 18.3301C7.87551 18.2768 6.05252 17.4918 4.69707 16.1363C3.34162 14.7809 2.55662 12.9579 2.50327 11.0417C2.44993 9.12557 3.1323 7.26172 4.41024 5.83297C5.68818 4.40421 7.46468 3.519 9.3749 3.35914C11.2851 3.19928 13.184 3.7769 14.6817 4.97337ZM9.16668 6.66671V11.6667H10.8333V6.66671H9.16668ZM6.66668 0.833374H13.3333V2.50004H6.66668V0.833374Z"
        fill="#254EDB"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_3_2605">
        <Rect width={20} height={20} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default TimerSvg;
