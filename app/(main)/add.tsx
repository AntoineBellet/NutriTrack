import { View, TextInput, Button, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { searchFood } from '../api/edamam';
import { useMeals } from '../../context/MealContext';

export default function AddMealScreen() {
    const router = useRouter();
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<any[]>([]);
    const [selectedMeal, setSelectedMeal] = useState<any | null>(null);

    const { addMeal } = useMeals();

    const onSearch = async () => {
        const data = await searchFood(query);
        if (data?.hints) {
            setResults(data.hints);
        }
    };

    const onAddMeal = () => {
        if (selectedMeal) {
            addMeal({
                id: selectedMeal.food.foodId,
                label: selectedMeal.food.label,
                foodId: selectedMeal.food.foodId,
                nutrients: selectedMeal.food.nutrients,
            });
            router.push(`/main/${selectedMeal.food.foodId}`);

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
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Pressable
                        style={styles.resultItem}
                        onPress={() => setSelectedMeal(item)}
                    >
                        <Text>{item.food.label}</Text>
                    </Pressable>
                )}
            />
            {selectedMeal && (
                <Button title="Ajouter ce repas" onPress={onAddMeal} />
            )}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 8,
        paddingHorizontal: 8,
    },
    resultItem: {
        padding: 12,
        backgroundColor: '#f0f0f0',
        marginVertical: 4,
    },
});
