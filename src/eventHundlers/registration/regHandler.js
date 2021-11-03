import {changeHandler,submitHandler} from '../helpers/formHandlers'
export function regHandler({...val}) {
    submitHandler({...val,path:'register'})
}

export function regChangeHandler({...val}) {
    changeHandler({...val})
}