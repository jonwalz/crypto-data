import * as React from 'react'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import SearchInput from '../SearchInput'
import { Bell, NavbarWrapper } from './styles'

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <NavbarWrapper>
      <Bell icon={faBell} />
      <SearchInput />
      {/* <nav>
            <ul>
                <li></li>
            </ul>
        </nav> */}
    </NavbarWrapper>
  )
}
