import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCarsCatalogThunk } from 'redux/Thunks/Thunks'

export const CarList = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getCarsCatalogThunk())
    }, [dispatch])
  return (
    <div>CarList</div>
  )
}
