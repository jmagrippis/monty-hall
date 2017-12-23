import getGameDoors from './getGameDoors'

describe('getGameDoors', () => {
  it('returns an array of objects', () => {
    const doors = getGameDoors()
    expect(Array.isArray(doors)).toBe(true)
    doors.forEach(door => {
      expect(typeof door).toBe('object')
    })

    const doorsB = getGameDoors(10)
    expect(Array.isArray(doorsB)).toBe(true)
    doorsB.forEach(door => {
      expect(typeof door).toBe('object')
    })
  })

  it('returns an amount of objects according to the optional parameter', () => {
    const doors = getGameDoors()
    expect(doors).toHaveLength(3)

    const doorsB = getGameDoors(10)
    expect(doorsB).toHaveLength(10)
  })

  it('puts a prize in only one of the returned objects', () => {
    const doors = getGameDoors()
    let prizes = 0
    doors.forEach(door => {
      if (!door.prize) return
      prizes++
    })
    expect(prizes).toBe(1)

    const doorsB = getGameDoors(10)
    let prizesB = 0
    doorsB.forEach(door => {
      if (!door.prize) return
      prizesB++
    })
    expect(prizesB).toBe(1)
  })

  it('there is a prize on the winning index', () => {
    const doors = getGameDoors(5, 3)
    expect(doors[3].prize).toBe(true)

    const doorsB = getGameDoors(20, 13)
    expect(doorsB[13].prize).toBe(true)
  })
})
