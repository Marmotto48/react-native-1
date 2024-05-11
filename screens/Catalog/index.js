import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  Button,
} from "react-native";
import { useState } from "react";


const Catalog = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <View>
      {isOpen && (
        <Text style={{ fontSize: 16 }} numberOfLines={!isOpen ? 2 : undefined}>
          test hereqs
        </Text>
      )}

      {!isOpen ? (
        <Button title="Read More" onPress={() => setOpen(true)} />
      ) : (
        <Button title="Read Less" onPress={() => setOpen(false)} />
      )}
    </View>
  );
};

export default Catalog;
