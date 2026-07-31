import { describe, expect, it } from 'vitest'

describe('sanity check', () => {
  it('fails on purpose to demonstrate a failing CI check', () => {
    expect(false).toBe(true)
  })
})
