export default function updateState({oldval,from,setState}){
    console.log('from',from)
            for(let key in from)
            {
                if(oldval[key]!==undefined){
                    oldval[key]=from[key]
                }
            }
            let newVal = Object.assign({},oldval)
            console.log('final State',newVal)
            setState(newVal)

}