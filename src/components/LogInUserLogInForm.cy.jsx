import React from 'react'
import LogInForm from './LogInUser'

describe('<LogInForm />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<LogInForm />)
  })
})