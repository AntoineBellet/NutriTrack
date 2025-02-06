import axios from 'axios';

const APP_ID = 'a2146d28';
const APP_KEY = '2f72468a672b4824a970b261e310dd32';

export async function searchFood(query: string) {
    const url = `https://api.edamam.com/api/food-database/v2/parser?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=${encodeURIComponent(query)}`;

    try {
        const response = await axios.get(url);
        console.log('Données reçues :', response.data);
        return response.data;
    } catch (error) {
        console.error('Erreur API Edamam :', error);
        return null;
    }
}
export async function getFoodDetails(foodId: string) {
    const url = `https://api.edamam.com/api/food-database/v2/nutrients?app_id=${APP_ID}&app_key=${APP_KEY}`;
    try {
        const response = await axios.post(url, {
            ingredients: [{ foodId }],
        });
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des détails du repas :', error);
        return null;
    }
}



