import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';
import MealItem from '../components/MealItem';

const MealList = props => {
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

    const renderMealItem = itemData => {
        const isFavorite = favoriteMeals.some(meal => meal.id === itemData.item.id);

        return <MealItem
            onSelectMeal={() => { props.navigation.navigate('MealDetail', { mealId: itemData.item.id, mealTitle: itemData.item.title, isFavorite: isFavorite }) }}
            title={itemData.item.title}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            image={itemData.item.imageUrl} />;
    };

    return (
        <View style={styles.list}>
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={props.displayedMeals}
                renderItem={renderMealItem}
                style={{ width: '100%' }} />
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default MealList;