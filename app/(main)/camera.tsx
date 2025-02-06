import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {Camera, BarCodeScanner, CameraType, CameraView} from 'expo-camera';
import { useRouter } from 'expo-router';
import { useMeals } from '../../context/MealContext';
import { getFoodDetails } from '../api/edamam';

export default function CameraScreen() {
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [scanned, setScanned] = useState(false);
    const router = useRouter();
    const { addMeal } = useMeals();
    const [facing, setFacing] = useState<CameraType>("back");




    useEffect(() => {
        const requestCameraPermission = async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        requestCameraPermission();
    }, []);

    const handleBarCodeScanned = async ({ data }: { data: string }) => {
        setScanned(true);

        const foodDetails = await getFoodDetails(data);
        if (foodDetails) {
            addMeal({
                id: data,
                label: foodDetails.ingredients[0]?.text || 'Aliment inconnu',
                foodId: data,
                nutrients: foodDetails.totalNutrients,
            });

            router.push('/main');
        }
    };

    if (hasPermission === null) {
        return <Text>Demande de permission...</Text>;
    }

    if (hasPermission === false) {
        return <Text>Accès à la caméra refusé</Text>;
    }

    return (
        <View style={styles.container}>
            <CameraView
                style={styles.camera}
                facing={facing}
                barcodeScannerSettings={{ barcodeTypes: ["ean13", "ean8", "upc_a", "upc_e"] }}
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                barCodeScannerSettings={{
                    barCodeTypes: [BarCodeScanner.Constants.BarCodeType.ean13],
                }}
            />
            {scanned && <Button title="Scanner à nouveau" onPress={() => setScanned(false)} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    camera: { flex: 1 },
});
