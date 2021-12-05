import db from '../db/db.json'

export default function tagFilter (name){
    const database = db.productRequests
    let data = []

    database.forEach( (suggest) => {

        if(name === 'all'){
            data = database
        }else{
            if(suggest.category === name){
                data.push(suggest)
            }
        }

    })

    return data;
}