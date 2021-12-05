import db from './../db/db.json'

export default function getSuggestStatus (){

    const database = db.productRequests

    const suggestsStatus = {
        live : 0,
        inProgress : 0,
        planned: 0
    }

    database.forEach( ({status}) => {
        if(status === 'live'){
            suggestsStatus.live +=1
        }
        if(status === 'in-progress'){
            suggestsStatus.inProgress +=1
        }
        if(status === 'planned'){
            suggestsStatus.planned +=1
        }
    })

    return suggestsStatus
    
}