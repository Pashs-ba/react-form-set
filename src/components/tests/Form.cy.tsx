import React from 'react'
import { Form } from '../Form.tsx'
import {elements, test_empty, test_initial_value} from "../test_form.ts";

describe('<Form />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Form elements={elements} onSubmit={(el)=>{console.log(el)}}/>)
  })
  it('test empty input', () => {
    cy.mount(<Form elements={test_empty} onSubmit={(el)=>{expect(el["test_value"]).eq("")}}/>)
    cy.get('.btn').click()
  })
  it('test empty input', () => {
    cy.mount(<Form elements={test_empty} onSubmit={(el)=>{expect(el["test_value"]).eq("some")}}/>)
    cy.get('.form-control').type("some")
    cy.get('.btn').click()
  })
  it('test initial value', () => {
    cy.mount(<Form elements={test_initial_value} onSubmit={(el)=>{expect(el["test_value"]).eq("some")}}/>)
    cy.get('.btn').click()
  })
})