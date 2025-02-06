import { useAuth } from "@clerk/clerk-expo";
import { useRouter, useLocalSearchParams } from 'expo-router';
import {View, Text, StyleSheet, Button, FlatList, Pressable} from "react-native";
import React, { useState, useEffect } from 'react';
import { useMeals } from '../../context/MealContext';


interface Meal {
    id: string;
    name: string;
    date: string;
}

const HomeScreen = () => {
    const { signOut } = useAuth();

    const router = useRouter();

    const { meals } = useMeals();
    const { addedMeal } = useLocalSearchParams();

    useEffect(() => {
        if (addedMeal) {
            console.log('Repas reçu :', addedMeal);
            const meal = JSON.parse(decodeURIComponent(addedMeal as string));
        }
    }, [addedMeal]);


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mes repas</Text>
            <FlatList
                data={meals}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Pressable onPress={() => router.push(`/${item.foodId}`)}>
                        <Text>{item.label}</Text>
                    </Pressable>
                )}
            />
            <Pressable onPress={() => router.push('/add')}>
                <Text>Ajouter un repas</Text>
            </Pressable>

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
