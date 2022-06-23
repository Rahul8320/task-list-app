import {
  StyleSheet,
  TextInput,
  Button,
  View,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [goalText, setGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setGoalText({ text: enteredText, key: Math.random().toString() });
  }

  function addGoalHandler() {
    if (goalText.text !== undefined && goalText.text.trim() !== "") {
      props.onAddGoal(goalText);
    }
    setGoalText({ text: "", key: Math.random().toString() });
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Enter your goal!"
          onChangeText={goalInputHandler}
          value={goalText.text}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={props.onCancelModal}
              color="#fc1282"
            />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc" />
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
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 16,
  },
  inputText: {
    borderWidth: 2,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderRadius: 13,
    color: "#120438",
    width: "100%",
    padding: 13,
  },
  buttonContainer: {
    flexDirection: "row",
    margin: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
