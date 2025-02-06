import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import { getFoodDetails } from '../api/edamam';

export default function MealDetailScreen() {
    const { id } = useLocalSearchParams();
    const [meal, setMeal] = useState<any | null>(null);

    useEffect(() => {
        console.log('ID reçu dans [id].tsx :', id);
    }, [id]);


    useEffect(() => {
        const fetchMealDetails = async () => {
            const data = await getFoodDetails(id as string);
            if (data && data.hints.length > 0) {
                const foodDetails = data.hints[0].food;
                setMeal({
                    name: foodDetails.label,
                    description: foodDetails.category,
                    calories: foodDetails.nutrients.ENERC_KCAL,
                    ingredients: foodDetails.foodContentsLabel?.split(', ') || [],
                });
            }
        };

        fetchMealDetails();
    }, [id]);

    if (!meal) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Repas introuvable</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{meal.name}</Text>
            <Text style={styles.description}>{meal.description}</Text>
            <Text style={styles.calories}>Calories : {meal.calories}</Text>
            <Text style={styles.ingredientsTitle}>Ingrédients :</Text>
            <FlatList
                data={meal.ingredients}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <Text style={styles.ingredient}>{item}</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        marginBottom: 16,
    },
    description: {
        fontSize: 16,
        marginBottom: 8,
    },
    calories: {
        fontSize: 16,
        marginBottom: 8,
    },
    ingredientsTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 16,
    },
    ingredient: {
        fontSize: 16,
        color: '#333',
    },
    errorText: {
        fontSize: 18,
        color: 'red',
    },
});
