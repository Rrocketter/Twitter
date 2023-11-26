import { View, StyleSheet, Text, Image, TextInput, Pressable } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";

const user = {
    id: '1',
    name: 'Vadim Savin',
    username: 'webdevvadim',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg',
}

export default function NewTweet() {
    const [text, setText] = useState();
    
    
    const onTweetPress = () => {
        console.warn("Posting the tweet!")
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Link href="../" style={styles.cancelButton}>Cancel</Link>
            

                <Pressable onPress={onTweetPress} style={styles.button}>
                    <Text style={styles.buttonText}>Tweet</Text>
                </Pressable>
            </View>

            <View style={styles.inputContainer}>
                <Image src={user.image} style={styles.userImage} />
                <TextInput 
                    value={text}
                    placeholder="What's happening?" 
                    multiline 
                    numberOfLines={5} 
                    style={{ flex:1 }}/>
            </View>
        </View>
    )
} 
 
const styles = StyleSheet.create({
    container:{
        padding: 10,
        backgroundColor: 'white',
        flex: 1,
    },
    inputContainer: {
        flexDirection: 'row',
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
        margin: 7,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#1C9BF0',
        padding: 15,
        paddingHorizontal: 20,
        borderRadius: 30,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    cancelButton: {
        fontSize: 15,
        fontWeight: 'bold',
        padding: 15,
        paddingHorizontal: 20,
        borderRadius: 30,
        borderWidth: 5,
        borderColor: '#1C9BF0',
    },
})