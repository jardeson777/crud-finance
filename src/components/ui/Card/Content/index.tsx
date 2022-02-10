import React from 'react';
import Flex from '../../../infra/layout/Flex';

const Content: React.FC = ({ children }) => {
  return (
    <Flex
      direction="row"
      justifyContent="spaceBetween"
      alingItems="center"
      paddingX="px2"
      paddingY="py2"
    >
      {children}
    </Flex>
  );
};

export default Content;
