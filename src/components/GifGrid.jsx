import { useEffect, useState } from 'react'
//import { getGifs } from '../helpers/getGifs'
import { GifItem } from './GifItem.jsx'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({ category }) => {

    /*const [images, setImages] = useState([])

    const getImages = async() => {
        const newImages = await getGifs(category)
        setImages(newImages)
    }

    useEffect( () => {
        getImages();
    }, [])*/

    const { images, isLoading } = useFetchGifs( category )

    console.log(isLoading)

    return (
        <>
            <h3>{ category }</h3>
            {/*
                { 
                    isLoading
                    ? <h2>{"Loading..."}</h2>
                    : null 
                }

                 // Se puede crear un componente para poder centralizar el loading
                <IsLoadingComponent isLoading = {isLoading}/>
            */}
            { 
                isLoading && <h2>{"Loading..."}</h2> 
            }

            <div className="card-grid">
                { 
                    images.map( (image) =>
                        <GifItem 
                            key={ image.id } 
                            { ...image }
                        />
                )}
            </div>
        </>
    )
}