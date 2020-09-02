// import React from 'react'

import { useState, useEffect } from "react";

export const useFetch = ({ uri, params }, callback = (data) => data) => {
    const [state, setState] = useState({
        data: null,
        loading: true
    })

    useEffect(() => {
        const getData = async () => {
            const param = Object.entries(params).map(([key, value]) => `${key}=${value}`).join('&')

            const url = `${uri}?${param}`

            const resp = await fetch(url)
            const { data } = await resp.json()

            setState({
                data: callback(data),
                loading: false
            })
        }

        getData()
    }, [params, uri, callback])

    return state;
}
