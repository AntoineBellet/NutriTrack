import { useLocalSearchParams } from 'expo-router';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useMeals } from '../../context/MealContext';
import { useRouter } from 'expo-router';

export default function MealDetailScreen() {
    const { id } = useLocalSearchParams();
    const { meals, removeMeal } = useMeals();
    const router = useRouter();
    const [meal, setMeal] = useState<any | null>(null);

    useEffect(() => {
        const currentMeal = meals.find((meal) => meal.id === id);
        if (currentMeal) setMeal(currentMeal);
    }, [id, meals]);

    const handleDelete = () => {
        removeMeal(id as string);
        router.push('/main');
    };

    if (!meal) {
        return <Text style={styles.errorText}>Repas introuvable</Text>;
    }

    const { label, nutrients } = meal;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{label}</Text>
            <Text style={styles.description}>Calories : {nutrients.ENERC_KCAL}</Text>
            <Text style={styles.description}>Protéines : {nutrients.PROCNT || 'N/A'}</Text>
            <Text style={styles.description}>Glucides : {nutrients.CHOCDF || 'N/A'}</Text>
            <Text style={styles.description}>Lipides : {nutrients.FAT || 'N/A'}</Text>
            <Button title="Supprimer le repas" onPress={handleDelete} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 24, backgroundColor: '#fff', justifyContent: 'center' },
    title: { fontSize: 28, fontWeight: '700', marginBottom: 16 },
    description: { fontSize: 16, marginBottom: 8 },
    errorText: { fontSize: 18, color: 'red', textAlign: 'center' },
});
