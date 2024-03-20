import { View, Text, FlatList } from "react-native";
import { useState, useReducer } from "react";

// The type used to represent a tournament bracket in Smash.
type Bracket = {
  id: string;
  name: string;
};

/**
 * The list displaying each bracket the user has.
 *
 * @component
 * @returns {React.ReactElement} A user profile element.
 */
export const BracketList: React.FC = () => {
  // Uncomment when we start using state. Also might change to an actual reducer.
  //   const [brackets, setBrackets] = useState([]);

  const brackets: Bracket[] = [
    { id: "1", name: "Item 1" },
    { id: "2", name: "Item 2" },
    { id: "3", name: "Item 3" },
  ];

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>Bracket List</Text>
      <FlatList data={brackets} renderItem={({ item }) => <ListItem bracket={item} />} keyExtractor={(item) => item.id} />
    </View>
  );
};

// The type that is passed to the item in the list.
type ListItemProps = {
  bracket: Bracket;
};

/**
 * A singular item in the BracketList.
 *
 * @component
 * @returns {React.ReactElement} A user profile element.
 */
const ListItem: React.FC<ListItemProps> = ({ bracket }) => <Text>{bracket.name}</Text>;
