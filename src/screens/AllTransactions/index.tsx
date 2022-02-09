import React from 'react';
import { StatusBar, View } from 'react-native';
import { Box } from '../../components/infra/layout/Box';
import Flex from '../../components/infra/layout/Flex';
import { Heading } from '../../components/infra/typography/Heading';
import { Header } from '../../components/ui/Header';

const AllTransactions: React.FC = () => {
  return (
    <Box backgroundColor="purple1">
      <StatusBar barStyle="light-content" backgroundColor="#666DC3" />
      <Header text="Todas transações">
        <Flex
          direction="row"
          justifyContent="spaceBetween"
          paddingX="px2"
          paddingY="py3"
        >
          <View>
            <Heading color="purple1" fontSize="sm">
              Total de despesa
            </Heading>
            <Heading color="white" fontSize="md">
              R$ 300,00
            </Heading>
          </View>

          <View>
            <Heading color="purple1" fontSize="sm">
              Total de Receita
            </Heading>
            <Heading color="white" fontSize="md">
              R$ 3000,00
            </Heading>
          </View>
        </Flex>
      </Header>
    </Box>
  );
};

export { AllTransactions };
