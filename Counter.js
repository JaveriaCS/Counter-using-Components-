// import React from 'react';
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <View >
            <View style={{
                width: 340,
                padding: 8,
                marginLeft: 40,
                //    marginRight: 20,
            }}>
            <Button color="#f08080"
                onPress={() => { setCount(count + 1) }} title="Click Me"
            />
            </View>
            <View style={{
                width: 100,
                padding: 8,
                marginLeft: 150,
                //    marginRight: 20,
            }}>
            <Button
                onPress={() => { setCount(0) }} title="Reset"
            />
            </View>
            <br></br>
            <Text style={{textAlign: 'center'}}>You clicked me {count} times</Text>
            
        </View>
    );
}
export default Counter;
