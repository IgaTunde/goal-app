import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoalText, SetEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    SetEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    SetEnteredGoalText("");
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/adaptive-icon.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!!!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="ADD GOAL" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,

    borderColor: "#cccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 8,
    marginRight: 8,
    width: "70%",
    borderRadius: 10,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
});
