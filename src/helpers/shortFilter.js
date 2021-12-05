export const shortFilter = (data,type) => {  
    let shortList = [] 

    switch (type) {
        case 'Most Upvotes':

            shortList =data.sort(function(a, b) {
                return parseFloat(a.upvotes) - parseFloat(b.upvotes);
            })
            shortList.reverse()
            break;


        case 'Least Upvotes':
            shortList =data.sort(function(a, b) {
                return parseFloat(a.upvotes) - parseFloat(b.upvotes);
            }) 
            break;


        case 'Most Comments':
            shortList =data.sort(function(a, b) {
                return parseFloat(a.comments.length) - parseFloat(b.comments.length);
            })
            shortList.reverse()
            break;


        case 'Least Comments':
            shortList =data.sort(function(a, b) {
                return parseFloat(a.comments.length) - parseFloat(b.comments.length);
            }) 
            break;


        default:
            break;
    } 

    return shortList
}