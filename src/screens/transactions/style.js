import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#121212',
    },
    input: {
        backgroundColor: '#1E1E1E',
        color: '#ffffff',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#333333',
        marginBottom: 10,
    },
    dropdownButton: {
        backgroundColor: '#1E1E1E',
        padding: 15,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#333333',
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dropdownText: {
        color: '#ffffff',
    },
    modalContainer: {
        backgroundColor: '#1E1E1E',
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
        borderBottomColor: '#333333',
    },
    modalText: {
        color: '#ffffff',
    },
    transactionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: '#333',
        marginBottom: 10,
        borderRadius: 8,
    },
    transactionName: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFD700',
    },
    text: {
        color: '#ffffff',
        marginBottom: 5,
    },
    addButton: {
        position: 'absolute',
        bottom: 30,
        right: 30,
    },
});

export default styles;
