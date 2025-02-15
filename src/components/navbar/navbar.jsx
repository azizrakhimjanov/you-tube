import { Box, Stack } from "@mui/material"
import { logo } from "../../constants"
import { colors } from "../../constants/colors"
import { Link } from "react-router-dom"
import { SearchBar } from '../'
const Navbar = ()=> {
  return (
    <Stack direction={'row'} justifyContent={'space-between'} p={2} alignItems={'center'} sx={{position:"sticky", top:0, zIndex:999, background: colors.primary}} >
      <Link to={'/'}>
        <img src={logo} alt="logo" height={30} width={150} />
      </Link>
      <SearchBar/>
      <Box/>
    </Stack>
  )
}

export default Navbar
