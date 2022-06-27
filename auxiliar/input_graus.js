import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export class InputGraus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      width: 0,
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
    const { state, myplaceholder } = this.props;
    const { text,width } = this.state;
    const width0 = text ? text.length * 14.5 : myplaceholder.length * 16;
    // console.log({width})
    return (
      <View style={styles.conteiner}>
        <View style={get_style(width0).inp_place}>
          {text ? (
            <></>
          ) : (
            <Text style={styles.placeholder}
            // onLayout={(event) => {
            //   const { width } = event.nativeEvent.layout;
            //   this.setState({ width });
            // }}
            >{myplaceholder}</Text>
          )}
          <TextInput
            {...this.props}
            style={styles.input}
            placeholderTextColor={"#420601"}
            onChangeText={(text) => {
              // text = graus ? text.replace(/ |°/g, "") : text;
              // console.log({ text });
              this.setState({ text });
              this.callback(state, text);
            }}
            // onLayout={(event) => {
            //   const { width } = event.nativeEvent.layout;
            //   this.setState({ width });
            // }}
            // selection={text ? { start: text.length } : undefined}
            // value={`${text}${text && graus ? " °" : ""}`}
            value={text}
          />
        </View>
        {text ? <Text style={styles.txt}>{"°"}</Text> : <></>}
      </View>
    );
  }
}

const get_style = (width) =>
  StyleSheet.create({
    inp_place: {
      position: "relative",
      width,
      justifyContent: "center",
      // borderWidth: 1,
    },
  });

const styles = StyleSheet.create({
  conteiner: {
    height: 40,
    minWidth: 150,
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#7a8783",
    paddingHorizontal: 15,
    justifyContent: "center",
    fontSize: 25,
  },
  placeholder: {
    position: "absolute",
    width: "100%",
    height: "100%",
    fontSize: 25,
    textAlign: "center",
  },
  input: {
    position: "absolute",
    width: "100%",
    height: "100%",
    fontSize: 25,
  },
  txt: {
    fontSize: 25,
  },
});
