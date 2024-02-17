import React, { useState } from 'react'
import search from "../../assets/search.svg"
import { useDispatch, useSelector } from 'react-redux'
import { searched } from '../../features/filter/filterSlice'
import { useMatch, useNavigate } from 'react-router-dom'

const SearchForm = () => {
    const dispatch = useDispatch()
    const searchedWord = useSelector((state) => state.filter.searchedWord)
    const isHome = useMatch('/')
    const navigate = useNavigate()

    const [input, setInput] = useState(searchedWord)

    const handleSearchForm = (e) => {
        e.preventDefault()
        dispatch(searched(input))
        if(!isHome){
            navigate('/')
        }

    }

  return (
    <div
    className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200"
>
    <form onSubmit={handleSearchForm}>
        <input
            className="outline-none border-none mr-2"
            type="search"
            name="search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search"
        />
    </form>
    <img
        className="inline h-4 cursor-pointer"
        src={search}
        alt="Search"
    />
</div>
  )
}

export default SearchForm