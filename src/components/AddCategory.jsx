import { useState } from "react"

//export const AddCategory = ({ setCategories })=> {
export const AddCategory = ({ onNewCategory })=> {

    const [inputValue, setInputValue] = useState('')

    const changeInputValue = ( { target } ) => {
        setInputValue(target.value);
    }

    const submit = (event) => {
        event.preventDefault()

        if(inputValue.trim().length > 0){
            // Add to the list
            //setCategories( (categories) => [inputValue, ...categories] )
            onNewCategory(inputValue)

            // set the input value
            setInputValue('')
        }
        
    }

    return (
        <form onSubmit={ submit }>
            <input 
                type="text"
                placeholder="Search a gift" 
                value={ inputValue }
                onChange={ changeInputValue }
            />
        </form>
    )
}