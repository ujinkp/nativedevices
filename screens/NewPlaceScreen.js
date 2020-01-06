import React, { useState } from "react";
import {
  ScrollView,
  View,
  Button,
  Text,
  TextInput,
  StyleSheet
} from "react-native";
import { useDispatch } from 'react-redux';

import Colors from "../constants/Colors";
import * as placesActions from '../store/places-actions'; 

const NewPlaceScreen = props => {
  const [titleValue, setTitleValue] = useState("");
  const dispatch = useDispatch();

  const titleChangeHandler = text => {
    setTitleValue(text);
  };

  const savePlaceHandler = () => {
    dispatch(placesActions.addPlace(titleValue));
    props.navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={titleChangeHandler}
          title={titleValue}
        />
        <Button
          title="Save Place"
          color={Colors.primary}
          onPress={savePlaceHandler}
        />
      </View>
    </ScrollView>
  );
};

NewPlaceScreen.navigationOptions = {
  headerTitle: "Add Place"
};

const styles = StyleSheet.create({
  from: {
    margin: 30
  },
  label: {
    fontSize: 18,
    marginBottom: 15
  },
  textInput: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 15,
    marginVertical: 4,
    marginHorizontal: 2
  }
});

export default NewPlaceScreen;
