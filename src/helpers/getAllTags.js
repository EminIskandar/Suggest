import db from '../db/db.json'

export default function getAllTags (){
    const allSuggest = db.productRequests
    const allTags = ['all']

    allSuggest.forEach( ({category}) => {
        const ifHaveValue = allTags.some( name => name === category)

        if(!ifHaveValue){
            allTags.push(category)
        } 
    })

    return allTags;
}