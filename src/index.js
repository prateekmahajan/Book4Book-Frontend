import React, { Component } from 'react';
import axios from "axios";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import * as secureStorage from 'expo-secure-store'
import * as splashScreen from 'expo-splash-screen'
import rootCss from './rootCss';
import WelcomeScreenRoute from './routes/WelcomeScreenRoute';
import TabNavigationRoute from './routes/TabNavigationRoute';


import Experimental from './exp';
import { Text } from 'react-native';


DefaultTheme.colors.primary = rootCss.primaryColor
DefaultTheme.colors.text = rootCss.primaryColor

class Index extends Component {
    state = {
        token: true
    }

    async componentDidMount() {
        splashScreen.preventAutoHideAsync()
        const token = await secureStorage.getItemAsync('authToken')
        this.setState({ token })
        splashScreen.hideAsync()
    }
    handleLogin(token) {
        this.setState({ token })
    }
    handleLogout() {

    }

    render() {
        return (
            <NavigationContainer theme={DefaultTheme}>
                {!this.state.token && <WelcomeScreenRoute onLogin={(token) => handleLogin(token)} />}
                {this.state.token && <TabNavigationRoute onLogout={() => this.setState({ token: false })} />}
                {/* <Experimental/> */}
            </NavigationContainer>
        );
    }
}

export default Index;