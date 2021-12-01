import React from 'react'
import { View, Text, Button } from 'react-native'

export default Button = ({ color }) => {
    return (
        <View>
            <Button color={color}>
                <Text>Button</Text>
            </Button>
        </View>
    )
}
