import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#121212',
    },
    input: {
        backgroundColor: '#282828',
        color: '#ffffff',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#444',
        marginBottom: 10,
    },
    dropdownButton: {
        backgroundColor: '#282828',
        padding: 15,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#444',
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dropdownText: {
        color: '#ffffff',
    },
    modalContainer: {
        backgroundColor: '#282828',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '40%',
        left: '10%',
        right: '10%',
    },
    modalItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#444',
    },
    modalText: {
        color: '#ffffff',
    },
    addButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
});

export default styles;
