import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#121212',
    },
    input: {
        backgroundColor: '#282828',
        color: '#ffffff',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#444',
        marginBottom: 15,
    },
    deleteButton: {
        marginTop: 20,
        padding: 15,
        backgroundColor: '#FF4136',
        borderRadius: 5,
        alignItems: 'center',
    },
    deleteButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default styles;
