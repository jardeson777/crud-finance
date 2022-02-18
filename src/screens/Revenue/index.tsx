import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import Button from '../../components/infra/form/Button';
import { Box } from '../../components/infra/layout/Box';
import Flex from '../../components/infra/layout/Flex';
import { Heading } from '../../components/infra/typography/Heading';
import Text from '../../components/infra/typography/Text';
import Card from '../../components/ui/Card';
import { Header } from '../../components/ui/Header';
import { useData } from '../../global/hook/useData';
import { sumRevenue } from '../../global/utils';

const Revenue: React.FC = () => {
  const { data } = useData();
  const dataFilter = data.filter(item => item.type === 'revenue');

  const sumTotal = sumRevenue(data);

  return (
    <Box backgroundColor="purple1Light">
      <StatusBar barStyle="light-content" backgroundColor="#666DC3" />
      <Header text="Receita">
        <Flex
          direction="row"
          justifyContent="spaceBetween"
          paddingX="px2"
          paddingY="py3"
        >
          <View>
            <Heading color="purple1" fontSize="sm">
              Total de receita
            </Heading>
            <Heading color="white" fontSize="md" textAlign="left">
              R$ {sumTotal.toFixed(2)}
            </Heading>
          </View>

          <View>
            <Button
              onPress={() => {
                ('');
              }}
              backgroundColor="purple3"
              size="lg"
            >
              <Heading color="white" fontSize="sm">
                Adicionar receita
              </Heading>
            </Button>
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
        {dataFilter.map(item => {
          return (
            <Card key={item.id}>
              <Box style={{ marginRight: 10 }}>
                <Flex
                  direction="row"
                  alingItems="center"
                  justifyContent="spaceBetween"
                >
                  <Flex direction="row" alingItems="center">
                    <MaterialCommunityIcons
                      name="plus-circle-outline"
                      size={23}
                      color="#666DC3"
                      style={{ marginRight: 10 }}
                    />

                    <Heading color="purple5" fontSize="md">
                      {item.title}
                    </Heading>
                  </Flex>

                  <Text color="black" fontSize="sm">
                    {item.date}
                  </Text>
                  <View>
                    <Heading color="purple5" fontSize="md">
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

export default Revenue;
