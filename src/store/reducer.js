import tagsSlice from 'components/tags/tagsSlice'
import suggestionsSlice from 'components/suggestions/suggestionsSlice'
import boardSlice from '../components/board/boardSlice'

const reducer = {
    selectedTag :  tagsSlice.reducer,
    suggests : suggestionsSlice.reducer,
    isToggleMenuOpen : boardSlice.reducer
}


export default reducer