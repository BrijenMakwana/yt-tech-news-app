import React from "react";
import {View,StyleSheet,Text,SafeAreaView} from "react-native";
import Article from "../components/Article";

const HomeScreen = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Article/>

        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container:{

    }
})