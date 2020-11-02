import React from 'react';
import {FlatList} from 'react-native';
import {SelectItem} from './select-item';

export const SelectionView = (props) => {
  const {
    input: {value, onChange},
    items,
    style,
  } = props;

  return (
    <FlatList
      data={items}
      style={style}
      horizontal={true}
      keyExtractor={(item, index) => `item_${index}`}
      renderItem={({item}) => (
        <SelectItem item={item} value={value} onChange={onChange} />
      )}
    />
  );
};
