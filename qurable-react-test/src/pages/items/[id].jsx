import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import ItemsPage from '../items';
import ItemDetailsSkeleton from '../../components/ItemDetailsSkeleton';
import { getItemById } from '../../utils/api';

function ItemDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, status } = useQuery(['item', id], getItemById);

  return (
    <Container>
      <Head>
        <title>Item - {id}</title>
      </Head>

      {
        {
          idle: <ItemDetailsSkeleton />,
          loading: <ItemDetailsSkeleton />,
          error: <p>Something went wrong!</p>,
          success: (
            <Grid container spacing={8} pt={7}>
              <Grid item xs={12} sm={12} md={6}>
                <Image
                  src={data?.item.imageUrl}
                  alt={data?.name}
                  width="535"
                  height="535"
                  layout="responsive"
                />
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <h1>{data?.item.name}</h1>
                <p>{data?.item.description}</p>
              </Grid>
            </Grid>
          ),
        }[status]
      }

      <ItemsPage />
    </Container>
  );
}

export default ItemDetailsPage;
