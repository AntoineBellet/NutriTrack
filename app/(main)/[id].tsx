import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { getMealById } from '../../context/MealContext';

export default function MealDetailScreen() {
    const { id } = useLocalSearchParams();
    const [meal, setMeal] = useState<any | null>(null);

    useEffect(() => {
        const fetchMeal = async () => {
            if (id) {
                const mealData = await getMealById(id as string);
                setMeal(mealData);
            }
        };

        fetchMeal();
    }, [id]);

    if (!meal) {
        return <Text style={styles.errorText}>Repas introuvable</Text>;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{meal.label}</Text>
            <Text style={styles.description}>Calories : {meal.nutrients.ENERC_KCAL}</Text>
            <Text style={styles.ingredientsTitle}>Ingrédients :</Text>
            {meal.ingredients?.map((ingredient: string, index: number) => (
                <Text key={index} style={styles.ingredient}>{ingredient}</Text>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 24, backgroundColor: '#fff' },
    title: { fontSize: 28, fontWeight: '700', marginBottom: 16 },
    description: { fontSize: 16, marginBottom: 8 },
    ingredientsTitle: { fontSize: 18, fontWeight: '600', marginTop: 16 },
    ingredient: { fontSize: 16, color: '#333' },
    errorText: { fontSize: 18, color: 'red' },
});
