import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import { Box } from '../../components/infra/layout/Box';
import Flex from '../../components/infra/layout/Flex';
import { Heading } from '../../components/infra/typography/Heading';
import Card from '../../components/ui/Card';
import { Header } from '../../components/ui/Header';
import Text from '../../components/infra/typography/Text';

const AllTransactions: React.FC = () => {
  const data = [
    {
      id: 1,
      type: 'revenue',
      title: 'Salário',
      date: '31/01/2021',
      description:
        'Descrição simply dummy text of the printing and typesetting industry.',
      value: '30,00'
    },
    {
      id: 2,
      type: 'revenue',
      title: 'Salário',
      date: '31/01/2021',
      description:
        'Descrição simply dummy text of the printing and typesetting industry.',
      value: '30,00'
    },
    {
      id: 3,
      type: 'expenditure',
      title: 'Salário',
      date: '31/01/2021',
      description:
        'Descrição simply dummy text of the printing and typesetting industry.',
      value: '-30,00'
    },
    {
      id: 4,
      type: 'revenue',
      title: 'Salário',
      date: '31/01/2021',
      description:
        'Descrição simply dummy text of the printing and typesetting industry.',
      value: '30,00'
    },
    {
      id: 6,
      type: 'expenditure',
      title: 'Salário',
      date: '31/01/2021',
      description:
        'Descrição simply dummy text of the printing and typesetting industry.',
      value: '-30,00'
    },
    {
      id: 5,
      type: 'revenue',
      title: 'Salário',
      date: '31/01/2021',
      description:
        'Descrição simply dummy text of the printing and typesetting industry.',
      value: '30,00'
    }
  ];

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

              <Box style={{ marginRight: 10 }}>
                <Heading color="purple5" fontSize="md">
                  {item.title}
                </Heading>
                <Text color="white" fontSize="sm">
                  {item.date}
                </Text>
                <Text color="white" fontSize="sm">
                  {item.description}
                </Text>
              </Box>

              <View>
                <Heading color="purple5" fontSize="md">
                  {item.value}
                </Heading>
              </View>
            </Card>
          );
        })}
      </ScrollView>
    </Box>
  );
};

export { AllTransactions };
