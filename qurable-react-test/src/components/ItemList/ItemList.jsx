import Grid from '@mui/material/Grid'

import Item from '../Item'

function ItemList(props) {
  const { items } = props

  return (
    items.map((item) => {
      const { _id, tokenId, name, imageUrl, price, favoritesCount, collectionName } = item

      return (
        <Grid key={`item-${_id}`} item>
          <Item
            id={_id}
            name={name}
            price={price}
            tokenId={tokenId}
            imageUrl={imageUrl}
            collectionName={collectionName}
            favoritesCount={favoritesCount}
          />
        </Grid>
      );
    })
  );
}


export default ItemList;
