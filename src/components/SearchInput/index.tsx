import React from 'react'
import { useStore } from '../../store'
import { Input } from './styles'

const SearchInput: React.FC = () => {
  const setSearchValue = useStore((state) => state.setValue)
  const searchValue = useStore((state) => state.value)

  const handleChange = (e) => setSearchValue(e.target.value)

  return (
    <>
      <Input
        value={searchValue}
        type="text"
        placeholder="SEARCH"
        onChange={handleChange}
      />
    </>
  )
}

export default SearchInput
