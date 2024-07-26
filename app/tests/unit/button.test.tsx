import { expect, it, describe, beforeAll } from 'vitest'
import { render, RenderResult, screen } from '@testing-library/react'
import Button, { ButtonProps } from '@/components/Button'

const BUTTON_PROPS: ButtonProps = {
  text: "testbutton",
}

describe('Button', () => {
  let button: RenderResult;
  beforeAll(() => {
    button = render(<Button {...BUTTON_PROPS}  />)
  })

  it('matches snapshot', () => {
    expect(button).toMatchSnapshot()
  })

  it('renders text', () => {
    expect(screen.getByRole('paragraph').innerHTML).toContain(BUTTON_PROPS.text)
  })
})