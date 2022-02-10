import MaterialCommunityIcons from '@expo/vector-icons/build/MaterialCommunityIcons';
import React, { useState } from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import Button from '../../components/infra/form/Button';
import { Box } from '../../components/infra/layout/Box';
import Flex from '../../components/infra/layout/Flex';
import { Heading } from '../../components/infra/typography/Heading';
import Card from '../../components/ui/Card';
import Text from '../../components/infra/typography/Text';
import { Header } from '../../components/ui/Header';
import Modal from '../../components/ui/Modal';
import Input from '../../components/infra/form/Input';

const Expenditure: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const data = [
    {
      id: 1,
      type: 'expenditure',
      title: 'Salário',
      date: '31/01/2021',
      description:
        'Descrição simply dummy text of the printing and typesetting industry.',
      value: '30,00'
    },
    {
      id: 2,
      type: 'expenditure',
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
      value: '30,00'
    },
    {
      id: 4,
      type: 'expenditure',
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
      value: '30,00'
    },
    {
      id: 5,
      type: 'expenditure',
      title: 'Salário',
      date: '31/01/2021',
      description:
        'Descrição simply dummy text of the printing and typesetting industry.',
      value: '30,00'
    }
  ];

  const handleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <Box backgroundColor="purple1Light">
      <StatusBar barStyle="light-content" backgroundColor="#666DC3" />
      <Header text="Despesas">
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
            <Heading color="white" fontSize="md" textAlign="left">
              R$ 300,00
            </Heading>
          </View>

          <View>
            <Button backgroundColor="purple3" size="lg" onPress={handleModal}>
              <Heading color="white" fontSize="sm">
                Adicionar despesa
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
                name="minus-circle-outline"
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

      <Modal isOpenModal={isOpenModal}>
        <Flex
          justifyContent="spaceBetween"
          fullHeight
          paddingY="py2"
          paddingX="px3"
        >
          <Heading
            fontSize="lg"
            color="purple5"
            textAlign="center"
            style={{ marginBottom: 20 }}
          >
            Adicionar despesa
          </Heading>

          <Box>
            <Heading color="purple5">Título</Heading>
            <Input />
          </Box>

          <Box>
            <Heading color="purple5">Data</Heading>
            <Input />
          </Box>

          <Box>
            <Heading color="purple5">Descrição</Heading>
            <Input />
          </Box>

          <Box>
            <Heading color="purple5">Valor</Heading>
            <Input />
          </Box>
          <Flex direction="row" justifyContent="spaceBetween">
            <Button onPress={handleModal} backgroundColor="none" size="lg">
              <Text color="purple5" fontSize="sm">
                Voltar
              </Text>
            </Button>
            <Button onPress={handleModal} backgroundColor="purple2" size="lg">
              <Text color="purple5" fontSize="sm">
                Adicionar
              </Text>
            </Button>
          </Flex>
        </Flex>
      </Modal>
    </Box>
  );
};

export default Expenditure;
