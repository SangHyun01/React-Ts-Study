// 액션 타입 상수 정의
export const THEME_ACTIONS = {
    TOGGLE_THEME: 'TOGGLE_THEME',
    SET_THEME: 'SET_THEME'
};

// 초기 상태
export const initialTheme = {
    mode: 'light'
};

// 테마 리듀서
export const themeReducer = (state, action) => {
    switch (action.type) {
        case THEME_ACTIONS.TOGGLE_THEME:
            return {
                ...state,
                mode: state.mode === 'light' ? 'dark' : 'light'
            };
        case THEME_ACTIONS.SET_THEME:
            return {
                ...state,
                mode: action.payload
            };
        default:
            return state;
    }
};