import db from '../db/db.json'

export default function getAllSuggestCount (){

    const suggest = db.productRequests.length

    return suggest;
    
}