import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'

const PokemonCard = ({ name }) => {
    return (
        <View>
            <Text>{name}</Text>
        </View>
    )
}

export default PokemonCard
