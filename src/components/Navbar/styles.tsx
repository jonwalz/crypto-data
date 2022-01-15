import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { styled } from '@stitches/react'

export const NavbarWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  padding: '8px 16px',
  backgroundColor: '$blue800',
  borderBottom: '2px solid black',
})

export const Bell = styled(FontAwesomeIcon, {
  marginRight: '16px',
})
