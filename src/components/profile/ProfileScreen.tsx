import { useNavigation } from "@react-navigation/native";
import React from "react"
import { View, Button, Text, TouchableOpacity, StyleSheet } from 'react-native'



const ProfileScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Text>Profile not created</Text>
            <View style={styles.centerContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
};
export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    centerContainer: {
        flex: 0,
        justifyContent: 'center',
        alignItems:'center'
    },
    backButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#007AFF',
        borderRadius: 5,
    },
    backButtonText: {
        color: '#fff',
        fontSize: 16,
    },

});