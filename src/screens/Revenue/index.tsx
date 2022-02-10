import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import Button from '../../components/infra/form/Button';
import { Box } from '../../components/infra/layout/Box';
import Flex from '../../components/infra/layout/Flex';
import { Heading } from '../../components/infra/typography/Heading';
import Text from '../../components/infra/typography/Text';
import Card from '../../components/ui/Card';
import { Header } from '../../components/ui/Header';

const Revenue: React.FC = () => {
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
      type: 'revenue',
      title: 'Salário',
      date: '31/01/2021',
      description:
        'Descrição simply dummy text of the printing and typesetting industry.',
      value: '30,00'
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
      type: 'revenue',
      title: 'Salário',
      date: '31/01/2021',
      description:
        'Descrição simply dummy text of the printing and typesetting industry.',
      value: '30,00'
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
              R$ 300,00
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
        {data.map(item => {
          return (
            <Card key={item.id}>
              <MaterialCommunityIcons
                name="plus-circle-outline"
                size={23}
                color="#666DC3"
                style={{ marginRight: 10 }}
              />

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

export default Revenue;
