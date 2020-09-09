import React from 'react'
import {
  Flex,
  Dropdown,
} from '@fluentui/react-northstar'

const cities = [
  'Hà Nội',
  'Hồ Chí Minh',
  'Bangkok',
  'HongKong',
]

export const SearchBar: React.FunctionComponent = () => {
  return (
    <Flex column>
      <Flex.Item>
        {/* <Dropdown items={cities}
          placeholder="Select the city"
          checkable
          getA11ySelectionMessage={{
            onAdd: item => `${item} has been selected.`,
          }}
        /> */}
      </Flex.Item>
    </Flex>
  )
}
