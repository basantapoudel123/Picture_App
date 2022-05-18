import React from 'react'
import ImageCard from './ImageCard';
import './Images.css'

const ImageList = (props) =>{

    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image}/>
         
    });

    return <div className='image-style'>{images}</div>
};

export default ImageList