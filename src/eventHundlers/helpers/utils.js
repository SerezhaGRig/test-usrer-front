export function yearList() {
    let currentYear = (new Date().getFullYear())
    let years =[]
    for(let i = 1970;i<currentYear+1; i++)
        years.push(i)
    return years

}