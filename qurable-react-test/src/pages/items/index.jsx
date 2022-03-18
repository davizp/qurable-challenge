import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useInfiniteQuery } from 'react-query';

import ItemList from '../../components/ItemList';
import ItemListSkeleton from '../../components/ItemListSkeleton';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { getItemList } from '../../utils/api';
import { debounce } from '../../utils';
import { Typography } from '@mui/material';

function ItemsPage() {
  const router = useRouter();
  const { search } = router.query;

  const [items, setItems] = React.useState([]);
  const lastElementRef = React.useRef(null);
  const lastElementObserver = useIntersectionObserver(lastElementRef, {});
  const { data, status, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery(['items', search], getItemList, {
      getNextPageParam(_lastPage, pages) {
        return pages[pages.length - 1].paging.nextPage ?? undefined;
      },
    });

  const isVisible = !!lastElementObserver?.isIntersecting;

  React.useEffect(() => {
    const newItems = data?.pages?.reduce((acc, response) => {
      response.items.forEach((item) => {
        acc[item._id] = item;
      });

      return acc;
    }, {});

    setItems(Object.values(newItems || []));
  }, [data]);

  const debouncedFetchNextPage = React.useMemo(
    () => debounce(fetchNextPage),
    [fetchNextPage]
  );

  React.useEffect(() => {
    if (isVisible) {
      debouncedFetchNextPage();
    }
  }, [isVisible, debouncedFetchNextPage]);

  return (
    <Container>
      <Head>
        <title>Qurable NFT Marketplace</title>
      </Head>

      <Box pt={2}>
        <Typography component="h2" variant="h3">
          Items
        </Typography>
      </Box>

      {
        {
          idle: <ItemListSkeleton />,
          loading: <ItemListSkeleton />,
          error: <p>Something went wrong!</p>,
          success: (
            <>
              <Grid container justifyContent="space-between">
                <ItemList items={items} />
                {isFetchingNextPage && <ItemListSkeleton />}
              </Grid>

              {hasNextPage && (
                <Box p={2} display="flex" flex="1" alignItems="center">
                  <Button
                    key="lastElement"
                    variant="contained"
                    ref={lastElementRef}
                    onClick={fetchNextPage}>
                    Load More...
                  </Button>
                </Box>
              )}
            </>
          ),
        }[status]
      }
    </Container>
  );
}

export default ItemsPage;
