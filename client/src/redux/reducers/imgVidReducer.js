import { BOUGHT_PHOTO, GRAB_PHOTOS, ALREADY_BOUGHT} from "../actions/types";
const initialState = {
    imgObj: '',
    userImgs: '',
    isLoading: false,
};

export const imgVidReducer = (state = initialState, action) => {
    switch (action.type) {
        case GRAB_PHOTOS:
            // console.log(action.payload)
            return {
                ...state,
                imgObj: action.payload
            };
            case ALREADY_BOUGHT:
                // console.log(action.payload)
                return {
                    ...state,
                    userImgs: action.payload
                };
        case BOUGHT_PHOTO:
            // console.log(action.payload)
            return {
                ...state,
                userImgs: action.payload
            };
        default:
            return state;
    }
}