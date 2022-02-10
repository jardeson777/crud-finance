import { VariantProps } from 'stitches-native';
import { styled } from '../../../../global/styles/theme';

export const Container = styled('View', {
  variants: {
    direction: {
      row: {
        flexDirection: 'row'
      }
    },
    justifyContent: {
      flexStart: {
        justifyContent: 'flex-start'
      },
      flexEnd: {
        justifyContent: 'flex-end'
      },
      center: {
        justifyContent: 'center'
      },
      spaceBetween: {
        justifyContent: 'space-between'
      },
      spaceAround: {
        justifyContent: 'space-around'
      }
    },
    alingItems: {
      flexStart: {
        alignItems: 'flex-start'
      },
      flexEnd: {
        alignItems: 'flex-end'
      },
      center: {
        alignItems: 'center'
      },
      baseline: {
        alignItems: 'baseline'
      },
      stretch: {
        alignItems: 'stretch'
      }
    },
    paddingX: {
      px1: {
        paddingStart: 10,
        paddingEnd: 10
      },
      px2: {
        paddingStart: 20,
        paddingEnd: 20
      },
      px3: {
        paddingStart: 30,
        paddingEnd: 30
      }
    },
    paddingY: {
      py1: {
        paddingTop: 10,
        paddingBottom: 10
      },
      py2: {
        paddingTop: 20,
        paddingBottom: 20
      },
      py3: {
        paddingTop: 30,
        paddingBottom: 30
      }
    },
    fullHeight: {
      true: {
        height: '100%'
      }
    },
    fullWidth: {
      true: {
        width: '100%'
      }
    }
  }
});

export type FlexVariants = VariantProps<typeof Container>;
