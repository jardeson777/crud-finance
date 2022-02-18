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
      purple1Light: {
        backgroundColor: '$purple1Light'
      },
      purple2: {
        backgroundColor: '$purple2'
      },
      grey1: {
        backgroundColor: '$grey1'
      }
    },
    size: {
      fullWidth: {
        width: '100%'
      }
    },
    radius: {
      sm: {
        borderRadius: 4
      },
      md: {
        borderRadius: 8
      }
    }
  }
});

export type BoxVariants = VariantProps<typeof Container>;
