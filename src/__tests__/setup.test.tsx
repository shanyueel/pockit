import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

test('Vitest is configured correctly', () => {
  render(<h1>Pockit AI</h1>)
  expect(screen.getByText('Pockit AI')).toBeDefined()
})
