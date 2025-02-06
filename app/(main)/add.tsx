import { View, TextInput, FlatList, Pressable, Button, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { searchFood } from '../api/edamam';
import { useMeals } from '../../context/MealContext';

export default function AddMealScreen() {
    const router = useRouter();
    const { addMeal } = useMeals();
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<any[]>([]);
    const [selectedMeal, setSelectedMeal] = useState<any | null>(null);

    // Fonction de recherche
    const onSearch = async () => {
        const data = await searchFood(query);
        if (data?.hints) setResults(data.hints);
    };

    // Ajouter le repas sélectionné
    const onAddMeal = () => {
        if (selectedMeal) {
            addMeal({
                id: selectedMeal.food.foodId,
                label: selectedMeal.food.label,
                foodId: selectedMeal.food.foodId,
                nutrients: selectedMeal.food.nutrients,
            });
            router.push('/main');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Rechercher un aliment"
                value={query}
                onChangeText={setQuery}
            />
            <Button title="Rechercher" onPress={onSearch} />
            <FlatList
                data={results}
                keyExtractor={(item) => item.food.foodId}
                renderItem={({ item }) => (
                    <Pressable
                        style={styles.resultItem}
                        onPress={() => setSelectedMeal(item)}
                    >
                        <Text>{item.food.label}</Text>
                    </Pressable>
                )}
            />
            <Button title="Scanner un QR Code" onPress={() => router.push('/main/camera')} />
            {selectedMeal && <Button title="Valider" onPress={onAddMeal} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 24 },
    input: { height: 40, borderColor: '#ccc', borderWidth: 1, marginBottom: 8, paddingHorizontal: 8 },
    resultItem: { padding: 12, backgroundColor: '#f0f0f0', marginVertical: 4 },
});
