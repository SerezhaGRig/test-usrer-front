import {changeHandler,submitHandler} from '../helpers/formHandlers'
import updateState from '../helpers/updateState'
export function loginHandler({...val}) {
    submitHandler({...val,path:'login',callback:function (response) {
            if(response.data === 'you are logged in')
            {
                window.location.reload();

            }
            else {
                updateState({oldval:val.formVal,from:{unfortunate:'Unfortunate'},setState:val.setVal})
            }

        }
    })
}

export function loginChangeHandler({...val}) {
    changeHandler({...val})
}