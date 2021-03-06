import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { styled } from '@mui/system';
import Image from 'next/image';
import Link from 'next/link';

function Item(props) {
  const { id, tokenId, name, imageUrl, price, collectionName, favoritesCount } =
    props;

  return (
    <Link href={`/items/${id}`} passHref>
      <Card elevation={2}>
        <Box p={2}>
          <Image src={imageUrl} width="235" height="235" alt={name} />

          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            #{tokenId}
          </Typography>

          <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
            {collectionName} Collection
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            {name}
          </Typography>

          <Stack flexDirection="row" spacing={2}>
            <Typography variant="body2" sx={{ fontWeight: 'bold', marginRight: 1 }}>
              {price.toFixed(5)}
            </Typography>
            <Image
              src="/assets/svgs/eth.svg"
              width="12"
              height="12"
              title="Etherium"
              alt="Etherium"
            />
          </Stack>
        </Box>

        <Divider />

        <Box pl={2} pr={2}>
          {/* <Typography>List Value</Typography> */}

          <Box textAlign="right">
            <IconButton>
              <Typography pr={0.5}>{favoritesCount}</Typography>
              <FavoriteBorderOutlinedIcon xs={{ verticalAlign: 'bottom' }} />
            </IconButton>
          </Box>
        </Box>
      </Card>
    </Link>
  );
}

export const Card = styled(Paper)({
  color: 'darkslategray',
  backgroundColor: 'aliceblue',
  margin: 8,
  borderRadius: 8,
});

export default Item;
