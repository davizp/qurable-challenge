const baseURL = process.env.NFT_SERVICE_URL || '/api'

export async function getItemList({ queryKey, pageParam = 1, ...todo }, ...rest) {
  const [, search] = queryKey;

  const queryParams = search ? `search=${search}` : '';

  const items = await fetch(`${baseURL}/items?${queryParams}&page=${pageParam}`);

  return items.json()
}

export async function getItemById({ queryKey }) {
  const [, id] = queryKey;

  const items = await fetch(`${baseURL}/items/${id}`);

  return items.json()
}