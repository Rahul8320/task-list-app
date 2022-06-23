import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalInput from "./components/goalInput";
import GoalItem from "./components/goalItem";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function addNewGoal() {
    setModalIsVisible(true);
  }

  function cancelHandle() {
    setModalIsVisible(false);
  }

  function addGoalHandler(goalText) {
    setCourseGoals((previousState) => [...previousState, goalText]);
    cancelHandle();
  }

  function deleteHandler(id) {
    setCourseGoals((previousState) => {
      return previousState.filter((goal) => goal.key !== id);
    });
  }

  return (
    <>
      <StatusBar style="light"/>
      <View style={styles.appContainer}>
        <Button title="Add New Goal" color="#5e0acc" onPress={addNewGoal} />
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancelModal={cancelHandle}
        />
        <View style={styles.goalList}>
          <Text style={{ color: "white" }}>List of your goals ....</Text>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.key}
                  onDeleteItem={deleteHandler}
                />
              );
            }}
          />
        </View>
        {/* end goalList */}
      </View>
      {/* end appContainer */}
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalList: {
    flex: 5,
    marginTop: 10,
  },
});
