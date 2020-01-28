import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, Text, Switch } from 'react-native';
import { useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constans/Colors';
import { setFilters } from '../store/actions/meals';

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch
                value={props.state}
                onValueChange={props.onChange}
                trackColor={{ true: Colors.primaryColor }}
                thumbColor={Colors.primaryColor} />
        </View>
    );
};

const FiltersScreen = props => {
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    const { navigation } = props;
    const dispatch = useDispatch();

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        };

        dispatch(setFilters(appliedFilters));
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

    useEffect(() => {
        props.navigation.setParams({ save: saveFilters });
    }, [saveFilters]);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available filters</Text>
            <FilterSwitch label='Gluten Free' state={isGlutenFree} onChange={newValue => setIsGlutenFree(newValue)} />
            <FilterSwitch label='Lactose Free' state={isLactoseFree} onChange={newValue => setIsLactoseFree(newValue)} />
            <FilterSwitch label='Vegan' state={isVegan} onChange={newValue => setIsVegan(newValue)} />
            <FilterSwitch label='Vegetarian' state={isVegetarian} onChange={newValue => setIsVegetarian(newValue)} />
        </View>
    );
};

FiltersScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Filter Meals',
        headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item tite='Menu' iconName='ios-menu' onPress={() => {
                navData.navigation.toggleDrawer();
            }} />
        </HeaderButtons>,
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item tite='Save' iconName='ios-save' onPress={navData.navigation.getParam('save')} />
        </HeaderButtons>
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15
    }
});

export default FiltersScreen;