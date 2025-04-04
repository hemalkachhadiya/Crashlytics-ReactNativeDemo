import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import crashlytics from '@react-native-firebase/crashlytics';
import analytics from '@react-native-firebase/analytics';


export default function Homescreen() {
    // useEffect(() => {
        // App start hone par ek log message bhejein
        // crashlytics().log('App started');
    
        // analytics().logAppOpen();
    
        // crashlytics().recordError(new Error('Test error message'));
    //   }, []);
    return (
        <View>
            <Text>Homescreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({})