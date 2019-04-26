export const getYearMonthDate = (date)=>{
    if( date instanceof Number) date = new Date(date)
    if(date instanceof Date){
        return {
            year:date.getFullYear(),
            month:date.getMonth(),
            date:date.getDate()
        }
    }
}