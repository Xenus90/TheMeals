import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, ImageBackground } from 'react-native';
import DefaultText from '../components/DefaultText';

const MealItem = props => {
    return (
        <View style={styles.mealITem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground source={{ uri: props.image }} style={styles.bgImage}>
                            <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                        <DefaultText>{props.duration}m</DefaultText>
                        <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
                        <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mealITem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 22,
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        paddingVertical: 5,
        paddingHorizontal: 12,
        textAlign: 'center'
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '85%'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignContent: 'center',
        height: '15%'
    }
});

export default MealItem;