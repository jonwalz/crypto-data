import React, { useEffect, useState } from 'react'
import { useStore } from '../../store'
import { Input } from './styles'

const SearchInput: React.FC = () => {
  const setSearchValue = useStore((state) => state.setValue)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm) setSearchValue(searchTerm)
    }, 400)

    return () => clearTimeout(delayDebounceFn)
  }, [searchTerm, setSearchValue])

  const handleInputChange = (event) => {
    if (event) setSearchTerm(event.target.value)
  }

  return (
    <>
      <Input
        value={searchTerm}
        type="text"
        placeholder="SEARCH"
        onChange={handleInputChange}
      />
    </>
  )
}

export default SearchInput
