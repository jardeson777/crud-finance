import { VariantProps } from 'stitches-native';
import { styled } from '../../../../global/styles/theme';

export const Container = styled('View', {
  flex: 1,

  variants: {
    backgroundColor: {
      white: {
        backgroundColor: '$white'
      },
      purple1: {
        backgroundColor: '$purple1'
      },
      purple2: {
        backgroundColor: '$purple2'
      }
    }
  }
});

export type BoxVariants = VariantProps<typeof Container>;
