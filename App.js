import React, { useState } from 'react';
import { useScreens, enableScreens } from 'react-native-screens';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import MealsNavigator from './navigation/MealsNavigator';
import mealsReducer from './store/reducers/meals';

// useScreens();
enableScreens();

const rootReducer = combineReducers({
    meals: mealsReducer
});
const store = createStore(rootReducer);

const fetchFonts = () => {
    return Font.loadAsync({
        'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
        'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf')
    });
};

export default function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    if (!fontsLoaded) {
        return <AppLoading startAsync={fetchFonts} onFinish={() => setFontsLoaded(true)} />;
    }

    return (
        <Provider store={store}>
            <MealsNavigator />
        </Provider>
    );
}