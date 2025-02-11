import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const VideoSvg = (props:SvgProps) => (
  <Svg
    width={20}
    height={14}
    viewBox="0 0 20 14"
    fill="none"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.012 2.146C18.386 1.874 17.66 1.992 17.161 2.452L15 4.452V3C15 1.346 13.655 0 12 0H3C1.346 0 0 1.346 0 3V11C0 12.655 1.346 14 3 14H12C13.655 14 15 12.655 15 11V9.549L17.161 11.548C17.482 11.845 17.897 12 18.32 12C18.553 12 18.788 11.953 19.012 11.855C19.621 11.589 20 11.02 20 10.371V3.63C20 2.981 19.621 2.412 19.012 2.146Z"
      fill="#F7C480"
    />
  </Svg>
);
export default VideoSvg;
