import {changeHandler,submitHandler} from '../helpers/formHandlers'
export function loginHandler({...val}) {
    submitHandler({...val,path:'login',callback:function (response) {
            if(response.data === 'Congratulation')
            {
                if(history)
                    history.push('\login')
            }
            else {
                window.location.reload();
            }

        }
    })
}

export function loginChangeHandler({...val}) {
    changeHandler({...val})
}