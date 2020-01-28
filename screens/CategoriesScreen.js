import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = props => {
    const RenderGridItem = (itemData) => {
        return <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onSelect={() => { props.navigation.navigate('CategoryMeals', { categoryId: itemData.item.id }) }} />;
    };

    return (
        <FlatList numColumns={2} data={CATEGORIES} renderItem={RenderGridItem} />
    );
};

CategoriesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Meal Categories',
        headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Menu' iconName='ios-menu' onPress={() => {
                navData.navigation.toggleDrawer();
            }} />
        </HeaderButtons>
    };

};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default CategoriesScreen;