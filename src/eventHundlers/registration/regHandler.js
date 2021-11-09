import {changeHandler,submitHandler} from '../helpers/formHandlers'
export function regHandler({...val}) {
    submitHandler({...val,path:'register',callback:function (response) {
        console.log(response.data)
            if(response.data === 'Congratulation')
            {
                if(history)
                    val.history.push('\login')
            }
            else {
                window.location.reload();
            }
    
        }
    })
}

export function regChangeHandler({...val}) {
    changeHandler({...val})
}