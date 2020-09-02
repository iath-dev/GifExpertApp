import React from 'react'
// import { getGif } from '../helpers/getGifs';
import { useFetch } from '../hooks/useFetch';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { loading, data: images } = useFetch({
        uri: 'https://api.giphy.com/v1/gifs/search',
        params: {
            q: encodeURI(category),
            limit: 24,
            api_key: 'xKFGyG3jUVKXZ0AMbVlsdy8XjCk7fgmk'
        }
    }, (data) => data.map(({ id, title, images: { downsized: { url } } }) => ({ id, title, url })))

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading ? (
                <p className="animate__animated animate__flash">Cargando...</p>
            ): (
                <div className="card-grid">
                    {images.map(img => (
                        <GifGridItem key={img.id} {...img} />
                    ))}
                </div>
            )}
            {/*
            */}
        </>
    )
}
