import getDoorToOffer from './getDoorToOffer'

describe('getDoorToOffer', () => {
  it('returns the door with the prize, if the selected door does not have it', () => {
    const doors = [
      { prize: false },
      { prize: false },
      { prize: false },
      { prize: true },
      { prize: false },
      { prize: false }
    ]

    expect(getDoorToOffer(doors, 0)).toBe(3)
    expect(getDoorToOffer(doors, 4)).toBe(3)
    expect(getDoorToOffer(doors, 5)).toBe(3)

    const doorsB = [{ prize: true }, { prize: false }, { prize: false }]

    expect(getDoorToOffer(doorsB, 1)).toBe(0)
    expect(getDoorToOffer(doorsB, 2)).toBe(0)
  })

  it('returns any other door, if the selected door has the prize', () => {
    const doors = [
      { prize: false },
      { prize: false },
      { prize: false },
      { prize: true },
      { prize: false },
      { prize: false }
    ]

    expect(getDoorToOffer(doors, 3)).not.toBe(3)

    const doorsB = [{ prize: true }, { prize: false }]
    expect(getDoorToOffer(doorsB, 0)).not.toBe(0)

    const doorsC = [{ prize: false }, { prize: true }]
    expect(getDoorToOffer(doorsC, 1)).not.toBe(1)
  })
})
