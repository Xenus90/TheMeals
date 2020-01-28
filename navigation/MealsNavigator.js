import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constans/Colors';

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: {
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: Colors.primaryColor
        }
    }
});

const FavoritesNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: {
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: Colors.accentColor
        }
    }
});

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
}, {
    defaultNavigationOptions: {
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: Colors.primaryColor
        }
    }
});

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.primaryColor
        }
    },
    Favorites: {
        screen: FavoritesNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.accentColor
        }
    }
};

const MealsFavTabNavigator = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: 'white',
        shifting: true
    })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
            activeTintColor: Colors.accentColor
        }
    });

const MainNavigator = createDrawerNavigator({
    MealsFavs: { screen: MealsFavTabNavigator, navigationOptions: { drawerLabel: 'Meals' } },
    Filters: FiltersNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'OpenSans-Bold'
        }
    }
});

export default createAppContainer(MainNavigator);