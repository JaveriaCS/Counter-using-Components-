// import React from 'react';
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
const Message = () => {
    const [name, setName] = useState("Beenish Mustajab");

    return (
        <View >
            <TextInput style={{marginTop:"30px"}} placeholder="Enter your name..."
                onChangeText={text => setName(text)}
            />
            <Text>Hello {name}!</Text>
        </View>
    );
}
export default Message;