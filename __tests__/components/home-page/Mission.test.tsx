import React from 'react'
import { render, screen } from '@testing-library/react'
import Mission from '../../../src/components/home-page/Mission'
import { siteConfig } from '../../../src/lib/site.config'

describe('Mission', () => {
  it('renders the section heading', () => {
    render(<Mission />)
    expect(screen.getByRole('heading', { name: 'Our Mission' })).toBeInTheDocument()
  })

  it("states the charity's own mission from siteConfig", () => {
    render(<Mission />)
    expect(screen.getByText(siteConfig.description)).toBeInTheDocument()
  })

  it('mounts under the #mission section landmark id', () => {
    const { container } = render(<Mission />)
    expect(container.querySelector('#mission')).not.toBeNull()
  })
})
