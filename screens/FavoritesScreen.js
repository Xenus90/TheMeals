import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import MealList from '../components/MealList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';

const FavoritesScreen = props => {
    const favoritesMeals = useSelector(store => store.meals.favoriteMeals);

    if (favoritesMeals.length === 0 || !favoritesMeals) {
        return (<View style={styles.content}>
            <DefaultText>No favorites meals found</DefaultText>
        </View>);
    } else {
        return <MealList displayedMeals={favoritesMeals} navigation={props.navigation} />;
    }
};

FavoritesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your Favorites',
        headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item tite='Menu' iconName='ios-menu' onPress={() => {
                navData.navigation.toggleDrawer();
            }} />
        </HeaderButtons>
    };
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FavoritesScreen;