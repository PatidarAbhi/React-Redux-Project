const value ={
      option:'Home',
      id:''
} 

const DisplayReducer = (state = value, action) => {
    switch (action.type) {
        case 'Home':
            {
                return { ...state ,option: 'Home'}
            }
    
        case 'Add':
            {
                return { ...state ,option: 'Add'}
            }
        case 'Update':
            {
                const id=action.payload;
                console.log("id in reducer"+id);
                return { ...state ,option: 'Update', id:id}
            }
        case 'Delete':
            {
                return { ...state ,option: 'Delete'}
            }
            default: return state ;
    }
}
export default DisplayReducer