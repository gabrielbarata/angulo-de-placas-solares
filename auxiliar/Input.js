import React from "react";
import {
  StyleSheet,
  TextInput,
} from "react-native";

export class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  componentDidMount() {
    const { state, init = "" } = this.props;
    this.setState({ text: init });
    this.callback(state, init);
  }

  callback = function (str_state, val) {
    this.setState({ [str_state]: val });
  }.bind(this.props.THIS);

  render() {
    const { state } = this.props;
    const { text } = this.state;
    return (
        <TextInput
          {...this.props}
          style={styles.input}
          placeholderTextColor={'#D1C7BC'}
          onChangeText={(text) => {
            this.setState({ text });
            this.callback(state, text);
          }}
          value={text}
        />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    minWidth: 150,
    paddingHorizontal:15,
    color:'#FFC4C4',
    borderWidth: 1,
    borderRadius:2,
    textAlign: 'center',
    borderColor: "#7a8783",
    fontSize: 25,
  },
});