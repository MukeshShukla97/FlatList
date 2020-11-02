import {Field, reduxForm} from 'redux-form';
import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {SelectionView, SubmitButton} from '../components';
import {addItem, optionsSelector} from '../store';

import {connect} from 'react-redux';

@connect((state) => ({
  initialValues: {
    selection: state.options[0],
  },
  options: optionsSelector(state),
}))
@reduxForm({
  form: 'the-form',
  onSubmit: ({selection}, dispatch, {navigation}) => {
    dispatch(addItem(selection));
    navigation.goBack();
  },
})
export class FormScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {handleSubmit, options} = this.props;
    
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.headerText}>Check this cool form out!</Text>

            <Field
              name="selection"
              component={SelectionView}
              items={options}
              style={styles.selectionView}
            />

            <SubmitButton style={styles.submitButton} onPress={handleSubmit} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },

  content: {
    marginTop: 'auto',
    marginBottom: 'auto',
    width: '100%',
    height: '100%',
  },

  headerText: {
    marginTop: 20,
    fontSize: 24,
    textAlign: 'center',
  },

  selectionView: {
    marginTop: 20,
  },

  submitButton: {
    marginTop: 'auto',
    margin: 16,
  },
});
