import {configureStore} from '@reduxjs/toolkit';
import darkModeReducer from "./darkMode";

interface RootState {
    darkMode: boolean;
}

const loadState = (): RootState | undefined => {
    try {
        const serializedState = localStorage.getItem('darkMode');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState) as RootState;
    } catch (err) {
        return undefined;
    }
};

const saveState = (state: RootState) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('darkMode', serializedState);
    } catch (err) {
        console.error("Error: ", err);
    }
};

const persistedState = loadState();

const store = configureStore({
    reducer: darkModeReducer,
    preloadedState: persistedState
});

store.subscribe(() => {
    saveState(store.getState());
});

export default store;
