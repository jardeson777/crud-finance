import { VariantProps } from 'stitches-native';
import { styled } from '../../../../global/styles/theme';

export const Container = styled('TouchableOpacity', {
  borderRadius: 4,

  paddingTop: 8,
  paddingBottom: 8,

  variants: {
    backgroundColor: {
      none: {
        backgroundColor: 'transparent'
      },
      purple1: {
        backgroundColor: '$purple1'
      },
      purple2: {
        backgroundColor: '$purple2'
      },
      purple3: {
        backgroundColor: '$purple3'
      },
      purple4: {
        backgroundColor: '$purple4'
      },
      purple5: {
        backgroundColor: '$purple5'
      }
    },
    size: {
      fullWidth: {
        width: '100%'
      },
      sm: {
        paddingEnd: 12,
        paddingStart: 12
      },
      md: {
        paddingEnd: 16,
        paddingStart: 16
      },
      lg: {
        paddingEnd: 20,
        paddingStart: 20
      }
    }
  }
});

export type ButtonVariants = VariantProps<typeof Container>;
