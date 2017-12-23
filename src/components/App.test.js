import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

jest.mock('../firebase', () => {
  const mockDb = {}
  mockDb.collection = jest.fn(() => mockDb)
  mockDb.doc = jest.fn(() => mockDb)
  mockDb.onSnapshot = jest.fn(() => mockDb)
  return { db: mockDb }
})

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})
