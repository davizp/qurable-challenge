import MuiAppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Link from 'next/link';
import Image from 'next/image';

import SearchBox from '../SearchBox';

const menuId = 'primary-search-account-menu';

function AppBar() {
  return (
    <MuiAppBar position="static" p={2}>
      <Container>
        <Toolbar>
          <Box sx={{ flexGrow: { xs: 0, md: 1 } }}>
            <Link href="/" passHref>
              <Stack flexDirection="row" pr={2}>
                <Image
                  src="/assets/img/favicon/apple-touch-icon.png"
                  alt="Querable Logo"
                  width={35}
                  height={35}
                />
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ display: { xs: 'none', md: 'flex' }, paddingLeft: 1 }}>
                  Qurable Shop
                </Typography>
              </Stack>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 5, selfAlign: 'center' }}>
            <SearchBox />
          </Box>

          <Box sx={{ flexGrow: { xs: 0 }, selfAlign: 'flex-end'  }}>
            <Box sx={{ display: 'flex' }}>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                color="inherit">
                <AccountCircle />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
}

export default AppBar;
