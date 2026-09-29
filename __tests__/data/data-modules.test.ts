import { team } from '@/data/team'
import { isPending } from '@/lib/site.config'

// These validate the data contract a forking charity must follow when editing
// the JSON/TS under src/data/* — every item must carry the fields its component
// renders, so a malformed edit fails the suite instead of the live site.
describe('data modules', () => {
  describe('team', () => {
    it('is a non-empty array, or empty while the team is pending', () => {
      expect(Array.isArray(team)).toBe(true)
      if (isPending('team')) expect(team).toHaveLength(0)
      else expect(team.length).toBeGreaterThan(0)
    })
    it('every member has a name and role; LinkedIn, when present, is an https://linkedin.com URL', () => {
      for (const m of team) {
        expect(m.name).toBeTruthy()
        expect(m.role).toBeTruthy()
        // Photos were removed in favor of initials monograms — no imageUrl field.
        expect('imageUrl' in m).toBe(false)
        // linkedinUrl is optional; when set it must be an https:// URL on
        // linkedin.com (or a subdomain) — the only shape TeamMemberCard turns
        // into a link (safeLinkedInUrl). Enforcing the host here means bad data
        // fails the suite instead of silently rendering as a non-link.
        if (m.linkedinUrl !== undefined) {
          expect(m.linkedinUrl).toMatch(/^https:\/\/([a-z0-9-]+\.)*linkedin\.com(\/|$)/i)
        }
      }
    })
  })
})
