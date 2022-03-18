import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

import { Card } from '../Item';

function ItemSkeleton() {
  return (
    <Card elevation={4}>
      <Stack spacing={2} p={2}>
        <Skeleton variant="rectangular" width={220} height={220} />
        <Skeleton variant="text" width={90} />
        <Skeleton variant="text" width={155} />
        <Skeleton variant="rectangular" width={180} />
      </Stack>
    </Card>
  );
}

export default ItemSkeleton;
