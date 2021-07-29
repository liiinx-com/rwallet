import React from "react";
import { COLORS, SIZES, icons, FONTS } from "../../constants";
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  ChartXLabel,
  ChartYLabel,
  monotoneCubicInterpolation,
} from "@rainbow-me/animated-charts";
// import {} from "dayjs";

import { View, Text, Dimensions } from "react-native";
export const { width: SIZE } = Dimensions.get("window");

const index = ({
  data,
  containerStyle,
  verticalLabels,
  horizontalLabels,
  dots,
  innerLines,
  verticalLines,
  OutherLines,
  color = "green",
  height = 50,
  width = SIZES.width,
}) => {
  const points = monotoneCubicInterpolation({ data, range: 40 });
  return (
    <View style={{ ...containerStyle }}>
      <ChartPathProvider data={{ points, smoothingStrategy: "bezier" }}>
        <ChartPath
          height={height}
          strokeWidth={2}
          stroke={color}
          width={width}
        />
        {dots && <ChartDot style={{ backgroundColor: "blue" }} />}
      </ChartPathProvider>
    </View>
  );
};

export default index;
