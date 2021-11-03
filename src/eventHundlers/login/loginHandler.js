import {changeHandler,submitHandler} from '../helpers/formHandlers'
export function loginHandler({...val}) {
    submitHandler({...val,path:'login'})
}

export function loginChangeHandler({...val}) {
    changeHandler({...val})
}