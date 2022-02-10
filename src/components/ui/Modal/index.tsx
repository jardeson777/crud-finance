import React from 'react';
import { Modal as ModalNative } from 'react-native';

import { Container, Content } from './styles';

interface ModalProps {
  isOpenModal: boolean;
}

const Modal: React.FC<ModalProps> = ({ isOpenModal, children }) => {
  return (
    <ModalNative visible={isOpenModal} transparent animationType="fade">
      <Container>
        <Content>{children}</Content>
      </Container>
    </ModalNative>
  );
};

export default Modal;
