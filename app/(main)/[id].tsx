import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { useLocalSearchParams } from 'expo-router';



interface Meal {
    id: string;
    name: string;
    description: string;
    calories: number;
    date: string;
}

// Exemple de données statiques (temporaire)
const exampleMeals: Record<string, Meal> = {
    '1': {
        id: '1',
        name: 'Salade César',
        description: 'Une salade classique avec poulet, croûtons et parmesan.',
        calories: 350,
        date: '2025-02-06',
    },
    '2': {
        id: '2',
        name: 'Poulet rôti',
        description: 'Poulet rôti avec pommes de terre et légumes.',
        calories: 600,
        date: '2025-02-05',
    },
};

export default function MealDetailScreen() {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const [meal, setMeal] = useState<Meal | null>(null);

    useEffect(() => {
        // Charger les données du repas à partir de l'id
        if (id && exampleMeals[id as string]) {
            setMeal(exampleMeals[id as string]);
        }
    }, [id]);

    if (!meal) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Repas introuvable {id}</Text>
                <Button title="Retour" onPress={() => router.back()} />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{meal.name}</Text>
            <Text style={styles.description}>{meal.description}</Text>
            <Text style={styles.calories}>Calories : {meal.calories}</Text>
            <Text style={styles.date}>Date : {meal.date}</Text>
            <Button title="Retour" onPress={() => router.back()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
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
    date: {
        fontSize: 14,
        color: '#888',
    },
    errorText: {
        fontSize: 18,
        color: 'red',
        marginBottom: 16,
    },
});
