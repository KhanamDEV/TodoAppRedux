import React from 'react';
import HomeScreen from "./screens/HomeScreen";
import store from "./redux/store";
import {Provider} from "react-redux";

function App() {
    return (
        <Provider store={store}>
            <HomeScreen/>
        </Provider>
    );
}

export default App;
