import React, { FunctionComponent } from 'react'
import {
  Flex,
  Dropdown,
  mergeStyles,
  ComponentSlotStyle,
  Image,
} from '@fluentui/react-northstar'

const inputItems = [
  'Bruce Wayne',
  'Natasha Romanoff',
  'Steven Strange',
  'Alfred Pennyworth',
  `Scarlett O'Hara`,
  'Imperator Furiosa',
  'Bruce Banner',
  'Peter Parker',
  'Selina Kyle',
]

const searchStyles: ComponentSlotStyle = mergeStyles({
  width: '300px',
  height: '100vh',
  background: '#1E213A',
  color: '#fff',
  overflow: 'hidden'
})

// const currentWeatherStyles: ComponentSlotStyle = mergeStyles({
//   backgroundImage: `url(${require('../assets/images/background.svg')})`,
//   backgroundPosition: 'top',
//   backgroundSize: 'auto',
//   backgroundRepeat: 'no-repeat',
// })

export const Search: FunctionComponent<any> = () => {
  const [city, setCity] = React.useState('');

  return (
    <Flex column styles={searchStyles}>
      <Flex.Item styles={{ padding: '2rem 1rem' }}>
        <Dropdown
          search
          items={inputItems}
          placeholder="Pick a place"
          noResultsMessage="We couldn't find any matches."
          onChange={(_, data) => {
            console.log(data)
          }}
        />
        </Flex.Item>
      <Flex.Item grow>
        <Flex.Item align="center">
          <Image src="" />
        </Flex.Item>
      </Flex.Item>
    </Flex>
  )
}

