export default function updateState({oldval,from,setState}){
            for(let key in from)
            {
                if(oldval[key]!==undefined){
                    oldval[key]=from[key]
                }
            }
            let newVal = Object.assign({},oldval)
            setState(newVal)

}