import React from 'react'
import { render, screen } from '@testing-library/react'
import Team from '../../../src/components/home-page/TheFreeForCharityTeam'
import { siteConfig } from '../../../src/lib/site.config'

describe('TheFreeForCharityTeam', () => {
  it("renders the section heading with the charity's name", () => {
    render(<Team />)
    expect(screen.getByRole('heading', { name: `The ${siteConfig.name} Team` })).toBeInTheDocument()
  })

  it('mounts under the #team section landmark id', () => {
    const { container } = render(<Team />)
    expect(container.querySelector('#team')).not.toBeNull()
  })
})

describe('TheFreeForCharityTeam with members', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  it('renders a card per member with initials monograms and no photos', () => {
    jest.isolateModules(() => {
      const members = [
        { name: 'Ada Lovelace', role: 'Chair' },
        { name: 'Grace Hopper', role: 'Treasurer' },
        { name: 'Alan Turing', role: 'Secretary' },
      ]
      jest.doMock('@/data/team', () => ({ team: members, configuredTeam: members }))
      const Populated = require('../../../src/components/home-page/TheFreeForCharityTeam').default
      const { container } = render(<Populated />)
      expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(3)
      expect(container.querySelectorAll('img').length).toBe(0)
    })
  })
})

describe('TheFreeForCharityTeam with an empty roster', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  it('renders nothing when the team array is empty and the team is not pending', () => {
    jest.isolateModules(() => {
      jest.doMock('@/data/team', () => ({ team: [], configuredTeam: [] }))
      require('@/lib/site.config').siteConfig.pending = []
      const EmptyTeam = require('../../../src/components/home-page/TheFreeForCharityTeam').default
      const { container } = render(<EmptyTeam />)
      expect(container.firstChild).toBeNull()
    })
  })
})
