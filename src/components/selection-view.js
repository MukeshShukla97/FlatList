import {FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';

export class SelectionView extends Component {
  render() {
    const {
      input: {value, onChange},
      items,
      style,
    } = this.props;

    return (
      <FlatList
        data={items}
        style={style}
        horizontal={true}
        keyExtractor={(item, index) => `item_${index}`}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[
              styles.selection,
              style,
              value && item.title === value.title
                ? styles.selectedOption
                : styles.options,
            ]}
            onPress={() => onChange(item)}>
            <Text style={styles.label}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    );
  }
}

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
    backgroundColor: '#F28300',
  },
  options: {
    backgroundColor: '#edaa5a',
  },
  label: {
    fontSize: 18,
    color: 'white',
  },
});
