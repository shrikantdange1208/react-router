import { Navbar } from '../Navbar'
import { Outlet } from 'react-router-dom'
import { StyledNavbar } from '../StyledNavbar'

export const SharedLayout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <StyledNavbar />
      <Outlet />
    </>
  )
}
