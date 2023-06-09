import { StyleSheet } from "react-native";


export const globalStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 20,
      paddingTop: 40,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    logo: {
      width: 40,
      height: 40,
      marginLeft: 10,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    postContainer: {
      marginBottom: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
    },
    postButton: {
      backgroundColor: '#4267B2',
      borderRadius: 5,
      padding: 10,
      alignItems: 'center',
    },
    postButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    feed: {
      flex: 1,
    },
    post: {
      borderWidth: 1,
      borderColor: '#ddd',
      padding: 10,
      marginBottom: 10,
    },
    postHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5,
    },
    profileImage: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 10,
    },
    email: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    postText: {
      fontSize: 16,
      marginBottom: 10,
    },
    actions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    actionButton: {
      flex: 1,
      alignItems: 'center',
      paddingVertical: 5,
      borderWidth: 1,
      borderColor: '#ddd',
    },
    actionText: {
      fontSize: 16,
    },
    center: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    headerButton: {
      width: '50%',
      alignItems: 'center',
      margin: 8,
      padding: 8,
      borderRadius: 8,
      borderColor: '#000',
    },
    selectedHeaderButton: {
      backgroundColor: '#ccc',
    },
    headerButtonText: {
      fontSize: 16,
      color: '#000',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  