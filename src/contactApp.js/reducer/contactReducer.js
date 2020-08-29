const initState = {
        contectList: [],
}

export const contReducer = (state = initState, action) => {

        switch (action.type) {
                case "updateList":
                        state = { ...state, contectList: action.newList }
                        break;
                default:
                        return state;

        }
        return state;
}
