import getRandomIntBetween from './getRandomIntBetween'

describe('getRandomIntBetween', () => {
  it('returns a number', () => {
    expect(typeof getRandomIntBetween()).toBe('number')
    expect(typeof getRandomIntBetween(2, 10)).toBe('number')
    expect(typeof getRandomIntBetween(200, 4000)).toBe('number')
  })

  it('throws an error if given min is bigger than given max', () => {
    expect(() => getRandomIntBetween(4, 2)).toThrow(
      'Given min (4) is bigger than given max (2)'
    )

    expect(() => getRandomIntBetween(51234, 432)).toThrow(
      'Given min (51234) is bigger than given max (432)'
    )
  })
})
