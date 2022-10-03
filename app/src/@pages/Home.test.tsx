import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Home } from './Home'
import { BrowserRouter } from 'react-router-dom'

describe('Home', () => {
  it('should allow a user to view home page', async () => {
    render(<Home />, {wrapper: BrowserRouter})

    // await userEvent.type(screen.getByLabelText(/username/i), 'johnUser')

    // userEvent.click(screen.getByRole('button', { name: /submit/i }))

    // expect(await screen.findByText('f79e82e8-c34a-4dc7-a49e-9fadc0979fda')).toBeInTheDocument()
    // expect(await screen.findByText('John')).toBeInTheDocument()
    // expect(await screen.findByText('Maverick')).toBeInTheDocument()
  })
})