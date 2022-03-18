import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import ItemSkeleton from '../ItemSkeleton';

function ItemListSkeleton() {
  return (
    <Container>
      <Grid container pt={2} justifyContent="space-between">
        <Grid item><ItemSkeleton /></Grid>
        <Grid item><ItemSkeleton /></Grid>
        <Grid item><ItemSkeleton /></Grid>
        <Grid item><ItemSkeleton /></Grid>
        <Grid item><ItemSkeleton /></Grid>
        <Grid item><ItemSkeleton /></Grid>
        <Grid item><ItemSkeleton /></Grid>
        <Grid item><ItemSkeleton /></Grid>
      </Grid>
    </Container>
  );
}

export default ItemListSkeleton;
