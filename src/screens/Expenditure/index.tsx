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
import { useData } from '../../global/hook/useData';
import { sumExpenditure } from '../../global/utils';

const Expenditure: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { data } = useData();
  const dataFilter = data.filter(item => item.type === 'expenditure');

  const sumTotal = sumExpenditure(data);

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
              R$ {sumTotal.toFixed(2)}
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
                      name="minus-circle-outline"
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
                      - R$ {item.value.toFixed(2)}
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
            <Input placeholder="Digite um título" />
          </Box>

          <Box>
            <Heading color="purple5">Data</Heading>
            <Input placeholder="Digite uma data" />
          </Box>

          <Box>
            <Heading color="purple5">Descrição</Heading>
            <Input placeholder="Digite uma descrição" />
          </Box>

          <Box>
            <Heading color="purple5">Valor</Heading>
            <Input placeholder="Digite um valor" />
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
