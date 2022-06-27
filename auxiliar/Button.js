import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { connect } from "react-redux";
import { change_button } from "../reducers/button_red";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  loading = () => {
    const { change_button } = this.props;
    const loading = !this.state.loading;
    this.setState({ loading });
    change_button();
  };

  func_loading = async (func, isAsync) => {
    const { pressed } = this.props;
    if (pressed) return;
    this.loading();
    try {
      const a = isAsync ? await func() : await this.to_async(func);
      this.loading();
      return a;
    } catch (e) {
      console.log(e);
      this.loading();
    }
  };

  to_async = (func) => {
    return new Promise((resolve) =>
      setTimeout(() => {
        func();
        resolve();
      }, 0)
    );
  };
  render() {
    const {
      text = "Aperte",
      onPress,
      isAsync = false,
      style = {},
    } = this.props;
    const newStyle = {};
    Object.keys(stylesDefault).map((key, index) => {
      newStyle[key] = { ...stylesDefault[key], ...style[key] };
    });
    const {width,height}=newStyle.button
    const act_style={width,height}
    return this.state.loading ? (
      <ActivityIndicator size="large" color="#0000ff" style={act_style}/>
    ) : (
      <TouchableOpacity
        {...this.props}
        onPress={() => this.func_loading(onPress, isAsync)}
        style={newStyle.button}
      >
        <Text style={newStyle.button_txt}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

const stylesDefault = StyleSheet.create({
  button: {
    // width: 300,
    width: "100%",
    backgroundColor: "#3003fc",
    // borderColor: "#420601",
    // borderWidth: 1,
    alignItems: "center",
    borderRadius: 8,
  },
  button_txt: {
    // fontWeight: "bold",
    color: "#fcfcfc",
    fontSize: 30,
  },
});

const mapStateToProps = (state) => {
  return {
    pressed: state.button,
  };
};

const mapDispatchToProps = {
  change_button,
};
Button = connect(mapStateToProps, mapDispatchToProps)(Button);
export { Button };
