import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text } from 'react-native'
import { normalize } from '../functions';
import { color } from '../resource';

// function
// (props) => {props.title, props.onPress}
export const ButtonMain = ({ title, onPress = () => alert('default'), containerStyle }) => {
    return <TouchableOpacity>
        <Text>กด</Text>
    </TouchableOpacity>
}
