import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { huskyScript, paramsHuskyScript } from './husky_script';

type HuskyProps = {
  scale: number;
  scrollEyes: boolean;
};

const Husky = ({ scale, scrollEyes }: HuskyProps) => {
  // standard size is 800x800
  const [baseSize, setBaseSize] = useState(800 * scale);

  let params: paramsHuskyScript = {
    leftEyeBaseX: baseSize * 0.088,
    leftEyeBaseY: baseSize * 0.355,
    rightEyeBaseX: baseSize * 0.285,
    rightEyeBaseY: baseSize * 0.358,
    leftEyeCenterOffsetX: baseSize * 0.05,
    leftEyeCenterOffsetY: baseSize * 0.045,
    rightEyeCenterOffsetX: baseSize * 0.05,
    rightEyeCenterOffsetY: baseSize * 0.035,
    scale: scale,
    scrollEyes: scrollEyes,
    baseSize: baseSize,
  };
  // for desktop screens
  useEffect(() => {
    let adjuster = huskyScript.bind(huskyScript)(params);
    return () => {};
  }, []);

  return (
    <>
      <svg id="huskySvg" width={(baseSize * 2) / 3} height={baseSize}>
        <image id="lefteye" height={baseSize * 0.09} x={baseSize * 0.088} y={baseSize * 0.355} xlinkHref="/lefteye.png" />
        <image id="righteye" height={baseSize * 0.08} x={baseSize * 0.285} y={baseSize * 0.358} xlinkHref="/righteye.png" />
        <image height={baseSize} xlinkHref="/huskybody.png" />
      </svg>
    </>
  );
};

export default Husky;
