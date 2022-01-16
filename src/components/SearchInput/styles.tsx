import { blackA } from '@radix-ui/colors'
import { styled } from '@stitches/react'

export const Input = styled('input', {
  all: 'unset',
  width: 200,
  display: 'block',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 10px',
  height: 35,
  fontSize: 15,
  lineHeight: 1,
  color: 'white',
  backgroundColor: blackA.blackA5,
  boxShadow: `0 0 0 1px ${blackA.blackA9}`,
  '&:focus': { boxShadow: `0 0 0 2px black` },
  '&::placeholder': {
    color: '$white100',
  },
})