import React from 'react'

interface IfiltersMap {
  text: string
  isCompleted: boolean
}

type IsetFiltersMap = (newValue: { text: string; isCompleted: boolean }) => any

const TodosListFilterBar = ({
  filtersMap,
  setFiltersMap,
}: {
  filtersMap: IfiltersMap
  setFiltersMap: IsetFiltersMap
}) => {
  return (
    <div className="todos-filter-bar">
      <input
        placeholder="search..."
        value={filtersMap.text}
        onChange={({ target: { value } }) =>
          setFiltersMap({ ...filtersMap, text: value })
        }
      />
      <input
        type="checkbox"
        checked={filtersMap.isCompleted}
        onChange={({ target: { checked } }) =>
          setFiltersMap({ ...filtersMap, isCompleted: checked })
        }
      />
    </div>
  )
}
export default TodosListFilterBar
