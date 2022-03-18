import React from 'react';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import RenderTextField from './RenderTextField';
import { getItemList } from '../../utils/api';
import { debounce } from '../../utils';
import { Typography } from '@mui/material';

const menuId = 'primary-search-account-menu';

function SearchBox() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [filterText, setFilterText] = React.useState('');
  const { data, isLoading } = useQuery(['items', filterText], getItemList);

  const debouncedRouterPush = React.useMemo(() => debounce(router.push), [router.push]);

  const renderInput = React.useCallback(
    (props) => {
      return <RenderTextField {...props} loading={isLoading} />;
    },
    [isLoading]
  );

  const onInputChange = (_, value) => {
    setFilterText(value);
    debouncedRouterPush(`/items?search=${value}`);
  };

  return (
    <Autocomplete
      inputValue={filterText}
      onInputChange={onInputChange}
      isOptionEqualToValue={getIsOptionEqualToValue}
      getOptionLabel={getOptionLabel}
      options={data?.items || []}
      loading={isLoading}
      renderInput={renderInput}
      renderOption={renderOption}
      freeSolo
    />
  );
}

function getOptionLabel(option) {
  if (typeof option === 'string') {
    return option;
  }

  return option.name;
}

function getIsOptionEqualToValue(option, value) {
  return option?.name === value?.name;
}

function renderOption(opts, item, { selected }) {
  const { imageUrl } = item;

  return (
    <li {...opts} selected={selected}>
      <Image src={item.imageUrl} width="45" height="45" alt={item.name} />
      <Box p={1}>
        <Typography>{item.name}</Typography>
      </Box>
    </li>
  );
}
export default SearchBox;
