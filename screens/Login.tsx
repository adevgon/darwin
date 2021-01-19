import React, {useState} from "react";
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet
} from "react-native";

import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";

const VALID_EMAIL = "contact@react-ui-kit.com";
const VALID_PASSWORD = "subscribe";

export interface LoginProps {
  navigation?: any
}
const Login = (props:LoginProps)=> {

  const styles = StyleSheet.create({
    login: {
      flex: 1,
      justifyContent: "center"
    },
    input: {
      borderRadius: 0,
      borderWidth: 0,
      borderBottomColor: theme.colors.gray2,
      borderBottomWidth: StyleSheet.hairlineWidth
    },
    hasErrors: {
      borderBottomColor: theme.colors.accent
    }
  });

  const [email, setEmail] = useState(VALID_EMAIL);
  const [password, setPassword] = useState(VALID_PASSWORD);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    Keyboard.dismiss();
    setLoading(true)
    if (email !== VALID_EMAIL) {
      // @ts-ignore
      errors.push("email");
    }
    if (password !== VALID_PASSWORD) {
      // @ts-ignore
      errors.push("password");
    }
    setErrors(errors);
    setLoading(false)
    if (!errors.length) {
      props.navigation.navigate("Details");
    }
  }

  const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);

  return (

      <KeyboardAvoidingView style={styles.login} behavior="padding">
        <Block padding={[0, theme.sizes.base * 2]}>
          <Text h1 bold>
            Login
          </Text>
          <Block middle>
            <Input
                label="Email"
                error={hasErrors("email")}
                style={[styles.input, hasErrors("email")]}
                defaultValue={email}
                onChangeText={text => setEmail(text)}
            />
            <Input
                secure
                label="Password"
                error={hasErrors("password")}
                style={[styles.input, hasErrors("password")]}
                defaultValue={password}
                onChangeText={text => setPassword(text)}
            />
            <Button gradient onPress={() => handleLogin()}>
              {loading ? (
                  <ActivityIndicator size="small" color="white" />
              ) : (
                  <Text bold white center>
                    Login
                  </Text>
              )}
            </Button>

            <Button onPress={() => props.navigation.navigate("Details")}>
              <Text
                  gray
                  caption
                  center
                  style={{ textDecorationLine: "underline" }}
              >
                Forgot your password?
              </Text>
            </Button>
          </Block>
        </Block>
      </KeyboardAvoidingView>

  );

}


export default Login;
