import React, { Component, PropTypes} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image
} from 'react-native';

export default class InputFieldComponent extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Image source={this.props.imageIcon} style={styles.image} resizeMode={Image.resizeMode.contain}/>
          <TextInput 
          {...this.props}
          style={styles.inputField}
          />
        </View>
    );
  }
}

InputFieldComponent.propTypes = {
  imageIcon: PropTypes.number.isRequired,
  secureTextEntry: PropTypes.bool,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    flexDirection: 'row',
    height: 30,
    marginTop: 10,
    borderBottomWidth: 1
  },
  image: {
    flex: 1,
    height: 20,
  },
  inputField: {
    flex: 5,
    height: 20
  }
});