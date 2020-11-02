import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import AppStyles from '../../AppStyles';

export const SelectItem = (props) => {
  const {style, value, onChange, item, ...rest} = props;

  const handleChange = () => {
    onChange(item);
  };

  return (
    <TouchableOpacity
      style={[
        styles.selection,
        style,
        value && item.title === value.title
          ? styles.selectedOption
          : styles.options,
      ]}
      onPress={handleChange}
      {...rest}>
      <Text style={styles.label}>{item.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  selection: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150,
    borderRadius: 10,
    shadowColor: 'black',
    shadowRadius: 3,
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    marginLeft: 10,
  },
  selectedOption: {
    backgroundColor: AppStyles.colour.btnPrimary,
  },
  options: {
    backgroundColor: AppStyles.colour.btnSecondary,
  },
  label: {
    fontSize: 18,
    color: AppStyles.colour.white,
  },
});
