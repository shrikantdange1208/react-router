import { StyledNavbar } from './StyledNavbar'
import { Outlet } from 'react-router-dom'
export const SharedProductLayout = () => {
  return (
    <>
      <h2>Products</h2>
      <Outlet />
    </>
  )
}
