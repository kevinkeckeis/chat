import React from 'react';
import { useSelector } from 'react-redux';
import { selectUsers } from './usersSlice';

import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import ContactItemSimple from '../../components/ContactItemSimple';

const UserList = () => {
  const users = useSelector(selectUsers);

  function getItemKey(index, data) {
    const item = data[index];
    return item.id;
  }

  return (
    <AutoSizer>
      {({ height, width }) => {
        const responsiveHeight = width >= 640 ? 80 : 60;

        return (
          <List
            innerElementType='ul'
            itemData={users}
            itemCount={users.length}
            itemKey={getItemKey}
            itemSize={responsiveHeight}
            height={height}
            width={width}
          >
            {({ data, index, style }) => {
              return (
                <ContactItemSimple
                  key={users[index].id}
                  style={style}
                  user={users[index]}
                />
              );
            }}
          </List>
        );
      }}
    </AutoSizer>
  );
};

export default UserList;
