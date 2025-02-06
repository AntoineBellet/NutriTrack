import { View, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const BottomNavbar = () => {
    const router = useRouter();

    return (
        <View style={styles.navbar}>
            <Button title="Accueil" onPress={() => router.push('/')} />
            <Button title="Ajouter" onPress={() => router.push('/add')} />
            <Button title="Profil" onPress={() => router.push('/profile')} />
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 16,
        backgroundColor: '#eee',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
});

export default BottomNavbar;
