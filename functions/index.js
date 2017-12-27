const functions = require('firebase-functions')
const Firestore = require('@google-cloud/firestore')

const db = new Firestore()

exports.aggregateStats = functions.firestore
  .document('doors/{amount}/games/{gameId}')
  .onWrite(event => {
    const switched = event.data.get('switched')
    const won = event.data.get('won')

    const gameTypeRef = db.collection('doors').doc(event.params.amount)

    return db.runTransaction(transaction => {
      return transaction.get(gameTypeRef).then(document => {
        const stats = document.data()
        const resultKey = `${won ? 'wins' : 'losses'}${
          switched ? 'With' : 'Without'
        }Switch`
        const payload = {
          gamesCount: stats.gamesCount + 1,
          [resultKey]: stats[resultKey] + 1
        }

        return transaction.update(gameTypeRef, payload)
      })
    })
  })
