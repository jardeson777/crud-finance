import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Header } from '../../components/ui/Header';

// import { Container } from './styles';

const AllTransactions: React.FC = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="#666DC3" />
      <Header text="Todas transações" />
    </SafeAreaView>
  );
};

export { AllTransactions };
