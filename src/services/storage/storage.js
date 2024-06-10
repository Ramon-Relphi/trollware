import { useState, useEffect } from 'react'

export function getStorageValue(key, defaultValue) {
    const saved = localStorage.getItem(key)
    const initial = JSON.parse(saved)
    return initial || defaultValue
}

export function setStorageValue(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue)
    })

    useEffect(() => {
        setStorageValue(key, value)
    }, [key, value])

    return [value, setValue]
}
