import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
    },
    modalActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
});

export default styles;
