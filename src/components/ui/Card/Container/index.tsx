import React from 'react';
import { Box } from '../../../infra/layout/Box';

const Container: React.FC = ({ children }) => {
  return (
    <Box
      backgroundColor="purple2"
      size="fullWidth"
      radius="md"
      style={{ marginBottom: 10 }}
    >
      {children}
    </Box>
  );
};

export default Container;
