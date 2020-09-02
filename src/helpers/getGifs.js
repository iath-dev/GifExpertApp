export const getGif = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?limit=12&q=${encodeURI(category)}&api_key=xKFGyG3jUVKXZ0AMbVlsdy8XjCk7fgmk`

    const resp = await fetch(url)
    const { data } = await resp.json()
    return data.map(({ id, title, images: { downsized: { url } } }) => ({ id, title, url }))
}