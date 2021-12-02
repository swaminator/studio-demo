/***************************************************************************
 * The contents of this file were generated with Amplify FrontendManager.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function CardA(props) {
  const { recipe, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      gap="16px"
      position="relative"
      justifyContent="center"
      direction="column"
      height="472px"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Image
        padding="0px 0px 0px 0px"
        alignSelf="stretch"
        grow="1"
        src={recipe?.image_url}
        width="100%"
        position="relative"
        basis="400px"
        height="400px"
        {...getOverrideProps(overrides, "Flex.Image[0]")}
      ></Image>
      <Flex
        padding="0px 0px 0px 0px"
        alignSelf="stretch"
        position="relative"
        shrink="0"
        gap="8px"
        direction="column"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Text
          padding="0px 0px 0px 0px"
          alignSelf="stretch"
          color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
          textAlign="left"
          shrink="0"
          display="flex"
          letterSpacing="0.010000000000000009px"
          justifyContent="flex-start"
          fontFamily="Inter"
          width="320px"
          fontSize="16px"
          lineHeight="24px"
          position="relative"
          fontWeight="800"
          direction="column"
          children={recipe?.title}
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[0]")}
        ></Text>
        <Text
          padding="0px 0px 0px 0px"
          alignSelf="stretch"
          color="rgba(48.000000938773155,64.00000378489494,80.00000283122063,1)"
          textAlign="left"
          shrink="0"
          display="none"
          justifyContent="flex-start"
          fontFamily="Inter"
          width="320px"
          fontSize="14px"
          lineHeight="24px"
          position="relative"
          fontWeight="400"
          direction="column"
          children="$99"
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[1]")}
        ></Text>
      </Flex>
    </Flex>
  );
}
