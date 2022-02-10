import { VariantProps } from 'stitches-native';
import { styled } from '../../../../global/styles/theme';

export const Container = styled('Text', {
  variants: {
    fontSize: {
      xl: {
        fontSize: 25
      },
      lg: {
        fontSize: 20
      },
      md: {
        fontSize: 15
      },
      sm: {
        fontSize: 12
      }
    },
    color: {
      white: {
        color: '$white'
      },
      purple1: {
        color: '$purple1'
      },
      purple5: {
        color: '$purple5'
      }
    },
    textAlign: {
      center: {
        textAlign: 'center'
      },
      left: {
        textAlign: 'left'
      },
      right: {
        textAlign: 'right'
      }
    }
  }
});

export type TextVariants = VariantProps<typeof Container>;
