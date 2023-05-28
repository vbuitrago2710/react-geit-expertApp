import { useState } from "react"
import {AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'Goku' ])

    const addCategory = (newCategory) => {
        //setCategories((cat) => [...cat, 'category']) This method is used when we send the setCategories only to another component
        if( !categories.includes(newCategory) ){
            setCategories([newCategory, ...categories]) 
        }
    }

    console.log(categories)
    return (
        <>
            {/* Title */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                //onSetCategory={ setCategories }
                onNewCategory = { addCategory }
            />

            { categories.map( (category, index) => {
                return <GifGrid 
                            key={ category } 
                            category={ category }
                        />
            }) }
        </>
    )
}