import { styled } from '../../../global/styles/theme';

export const Container = styled('View', {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
});

export const Content = styled('View', {
  backgroundColor: '$white',
  flex: 1,
  width: '100%',
  maxWidth: 320,
  maxHeight: 400,
  borderRadius: 8,
  margin: 50
});
