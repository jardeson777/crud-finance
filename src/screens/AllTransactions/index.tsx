import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import * as Progress from 'react-native-progress';

import Text from '../../components/infra/typography/Text';
import { Header } from '../../components/ui/Header';
import Card from '../../components/ui/Card';
import { Heading } from '../../components/infra/typography/Heading';
import Flex from '../../components/infra/layout/Flex';
import { Box } from '../../components/infra/layout/Box';
import { useData } from '../../global/hook/useData';
import { sumExpenditure, sumRevenue } from '../../global/utils';

const AllTransactions: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const { data } = useData();

  const total = sumRevenue(data) - sumExpenditure(data);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(!isLoading);
  //   }, 1000);
  // }, []);

  // if (isLoading) {
  //   return (
  //     <Flex justifyContent="center" alingItems="center" fullHeight fullWidth>
  //       <Progress.Circle size={30} indeterminate />
  //     </Flex>
  //   );
  // }

  return (
    <Box backgroundColor="purple1Light">
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
              Valor em caixa
            </Heading>
            <Heading color="white" fontSize="md">
              R$ {total.toFixed(2)}
            </Heading>
          </View>
        </Flex>
      </Header>

      <ScrollView
        style={{
          marginLeft: 20,
          marginRight: 20,
          marginTop: 20,
          marginBottom: 70
        }}
      >
        {data.map(item => {
          return (
            <Card key={item.id}>
              <Box style={{ marginRight: 10 }}>
                <Flex
                  direction="row"
                  alingItems="center"
                  justifyContent="spaceBetween"
                >
                  <Flex direction="row" alingItems="center">
                    {item.type === 'revenue' && (
                      <MaterialCommunityIcons
                        name="plus-circle-outline"
                        size={23}
                        color="#666DC3"
                        style={{ marginRight: 10 }}
                      />
                    )}

                    {item.type === 'expenditure' && (
                      <MaterialCommunityIcons
                        name="minus-circle-outline"
                        size={23}
                        color="#666DC3"
                        style={{ marginRight: 10 }}
                      />
                    )}

                    <Heading color="purple5" fontSize="md">
                      {item.title}
                    </Heading>
                  </Flex>

                  <Text color="black" fontSize="sm">
                    {item.date}
                  </Text>
                  <View>
                    <Heading color="purple5" fontSize="md">
                      {item.type === 'expenditure' && '-'}
                      R$ {item.value.toFixed(2)}
                    </Heading>
                  </View>
                </Flex>

                <Box style={{ marginTop: 5, marginLeft: 35 }}>
                  <Text color="black" fontSize="sm">
                    {item.description}
                  </Text>
                </Box>
              </Box>
            </Card>
          );
        })}
      </ScrollView>
    </Box>
  );
};

export { AllTransactions };
