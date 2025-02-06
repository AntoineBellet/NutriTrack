import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { getFoodDetails } from '../api/edamam';

export default function MealDetailScreen() {
    const { id } = useLocalSearchParams();
    const [mealDetails, setMealDetails] = useState<any | null>(null);

    useEffect(() => {
        const fetchMealDetails = async () => {
            if (id) {
                const data = await getFoodDetails(id as string);
                if (data) {
                    setMealDetails(data);
                }
            }
        };

        fetchMealDetails();
    }, [id]);

    if (!mealDetails) {
        return <Text style={styles.errorText}>Repas introuvable {id}</Text>;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{mealDetails.ingredients[0]?.text}</Text>
            <Text style={styles.description}>Calories : {mealDetails.totalNutrients.ENERC_KCAL.quantity}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 24, justifyContent: 'center', backgroundColor: '#fff' },
    title: { fontSize: 28, fontWeight: '700', marginBottom: 16 },
    description: { fontSize: 16, marginBottom: 8 },
    errorText: { fontSize: 18, color: 'red' },
});
