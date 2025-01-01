import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

const Form = () => {
  return (
    <View style={styles.form}>
      <Text style={styles.label}>Username</Text>
      <TextInput style={styles.input} placeholder="Enter Username"></TextInput>
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder="Enter Password"></TextInput>
      <Button title="Login" color="red" accessibilityLabel="Learn more about this purple button"></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    height: 400,
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    justifyContent: 'center',
    shadowOffset: {width: 6, height: 6},
    shadowColor: 'black',
    shadowOpacity: 0.5,
  },
  input: {
    width: '100%',
    height: 20,
    borderWidth: 1,
    padding: 20,
    borderRadius: 10,
    borderColor: 'gray',
    color: 'black',
  },
  label: {
    marginTop: 10,
    marginBottom: 5,
    fontWeight: '700',
  },
  button: {
    backgroundColor: 'red',
    width: '50%',
    height: 20,
  },
});

export default Form;
