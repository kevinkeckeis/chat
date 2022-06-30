import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from '../../components/ContactItem';
import { selectUsers } from './usersSlice';

import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

const UserList = () => {
  const users = useSelector(selectUsers);

  function getItemKey(index, data) {
    const item = data[index];
    return item.id;
  }

  return (
    <AutoSizer>
      {({ height, width }) => (
        <List
          innerElementType='ul'
          itemData={users}
          itemCount={users.length}
          itemKey={getItemKey}
          itemSize={85}
          height={height}
          width={width}
        >
          {({ data, index, style }) => {
            return (
              <ContactItem
                key={users[index].id}
                style={style}
                user={users[index]}
              />
            );
          }}
        </List>
      )}
    </AutoSizer>
  );
};

export default UserList;
