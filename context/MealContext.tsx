import React, { createContext, useContext, useState, ReactNode } from 'react';

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

    const addMeal = (meal: Meal) => {
        setMeals((prevMeals) => [...prevMeals, meal]);
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
