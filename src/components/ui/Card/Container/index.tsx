import React from 'react';
import { Box } from '../../../infra/layout/Box';

const Container: React.FC = ({ children }) => {
  return (
    <Box
      backgroundColor="white"
      size="fullWidth"
      radius="sm"
      style={{
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#e9e9e9'
      }}
    >
      {children}
    </Box>
  );
};

export default Container;
