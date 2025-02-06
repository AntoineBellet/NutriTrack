import { useAuth } from "@clerk/clerk-expo";
import { useRouter } from 'expo-router';
import {View, Text, StyleSheet, Button, FlatList, Pressable} from "react-native";
import React, { useState } from 'react';


interface Meal {
    id: string;
    name: string;
    date: string;
}

const HomeScreen = () => {
    const { signOut } = useAuth();

    const router = useRouter();

    const [meals, setMeals] = useState<Meal[]>([
        {id: '1', name: 'Salade César', date: '2025-02-06'},
        {id: '2', name: 'Poulet rôti', date: '2025-02-05'},
    ]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mes repas</Text>
            <FlatList
                data={meals}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Pressable
                        style={styles.item}
                        onPress={() => router.push(`/${item.id}`)}>
                        <Text style={styles.itemText}>{item.name}</Text>
                        <Text style={styles.itemDate}>{item.date}</Text>
                    </Pressable>
                )}
            />

            <Button title="Sign Out" onPress={() => signOut()} />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#fff',
        padding: 24,
    },
    title: {
        fontSize: 28,
        fontWeight: "700",
        marginBottom: 16,
        textAlign: "center",
    },
    item: {
        padding: 16,
        backgroundColor: '#f5f5f5',
        borderRadius: 12,
        marginBottom: 8,
    },
    itemText: {
        fontSize: 18,
        fontWeight: '600',
    },
    itemDate: {
        fontSize: 14,
        color: '#888',
    },
});
