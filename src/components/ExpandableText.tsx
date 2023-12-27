import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [isexpanded, setIsExpanded] = useState(false);

  const limit = 300;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = isexpanded ? children :  children.substring(0, limit) + '... ';

  return (
    <Text>
      {summary}
      <Button onClick={() => setIsExpanded(!isexpanded)} colorScheme={'yellow'} size='xs' fontWeight={'bold '}>{isexpanded ? "show less" : "show more"}</Button>
    </Text>
  );
};

export default ExpandableText;
