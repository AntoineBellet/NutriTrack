import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '@clerk/clerk-expo';
import React from "react";

export default function ProfileScreen() {
    const router = useRouter();
    const { signOut } = useAuth();

    const handleSignOut = async () => {
        await signOut();
        router.push('/sign-in');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profil</Text>
            <Button title="Sign Out" onPress={() => signOut()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#fff' },
    title: { fontSize: 28, fontWeight: '700', marginBottom: 16, textAlign: 'center' },
    email: { fontSize: 16, marginBottom: 24, textAlign: 'center' },
});
