import react, {useState} from "react"
import {View,Text,StyleSheet} from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
    const [searchText,setSearchText] = useState("");
    return (
        <View style={styles.container}>
            <SearchBar searchText={searchText} setSearchText={setSearchText}/>
            <Text>{searchText}</Text>
        </View>
    )
}

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    }
})