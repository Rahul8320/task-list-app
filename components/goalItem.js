import { StyleSheet, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <Pressable android_ripple={{color: 'yellow'}} onPress={props.onDeleteItem.bind(this, props.id)}>
      <Text style={styles.goalItem}>{props.text}</Text>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    textAlign: "center",
    backgroundColor: "#5e0acc",
    borderRadius: 16,
    color: "white",
  },
});
