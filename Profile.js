import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export function Profile({ route, navigation }) {
    const {name} = route.params;
    return (
        <View>
            <Text>Profile{name}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
