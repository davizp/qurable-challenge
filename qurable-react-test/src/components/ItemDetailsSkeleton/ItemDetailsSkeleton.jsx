import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

import ItemListSkeleton from '../ItemListSkeleton';

function ItemDetailsSkeleton() {
  return (
    <Container>
      <Grid container spacing={8} pt={7} alignItems="stretch">
        <Grid item xs={12} sm={12} md={6} >
          <Skeleton variant="rectangular" height="40vw" animation="wave"  />
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <Skeleton variant="text" width={255} />
          <Skeleton variant="text" width={350} />
          <Skeleton variant="text" width={400} />
          <Skeleton variant="text" width={375} />
          <Skeleton variant="text" width={289} />
          <Skeleton variant="text" width={305} />
          <Skeleton variant="text" width={320} />
        </Grid>
      </Grid>

      <ItemListSkeleton />
    </Container>
  );
}

export default ItemDetailsSkeleton;
