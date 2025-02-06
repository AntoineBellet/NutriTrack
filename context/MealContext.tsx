import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface Meal {
    id: string;
    label: string;
    foodId: string;
    nutrients: {
        ENERC_KCAL: number;
    };
}

interface MealsContextType {
    meals: Meal[];
    addMeal: (meal: Meal) => void;
}

const MealsContext = createContext<MealsContextType | undefined>(undefined);

export const MealsProvider = ({ children }: { children: ReactNode }) => {
    const [meals, setMeals] = useState<Meal[]>([]);

    // Charger les repas depuis le stockage local
    useEffect(() => {
        const loadMeals = async () => {
            try {
                const storedMeals = await AsyncStorage.getItem('meals');
                if (storedMeals) {
                    console.log('Repas chargés :', storedMeals);
                    setMeals(JSON.parse(storedMeals));
                } else {
                    console.log('Aucun repas trouvé dans AsyncStorage');
                }
            } catch (error) {
                console.error('Erreur lors du chargement des repas :', error);
            }
        };
        loadMeals();
    }, []);

    const addMeal = async (meal: Meal) => {
        const updatedMeals = [...meals, meal];
        setMeals(updatedMeals);

        try {
            await AsyncStorage.setItem('meals', JSON.stringify(updatedMeals));
            console.log('Repas enregistrés :', updatedMeals);
        } catch (error) {
            console.error('Erreur lors de l\'enregistrement des repas :', error);
        }
    };


    return (
        <MealsContext.Provider value={{ meals, addMeal }}>
            {children}
        </MealsContext.Provider>
    );
};

export const useMeals = () => {
    const context = useContext(MealsContext);
    if (!context) {
        throw new Error('useMeals doit être utilisé dans un MealsProvider');
    }
    return context;
};
