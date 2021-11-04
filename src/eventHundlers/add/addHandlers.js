import {changeHandler,submitHandler} from '../helpers/formHandlers'
export function addHandler({...val}) {
    submitHandler({...val,path:'add',callback:function (response){
            if(history)
                history.push('\login')
        }
    })
}

export function addChangeHandler({...val}) {
    changeHandler({...val})
}