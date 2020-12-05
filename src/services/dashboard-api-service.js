import TokenService from './token-service'
import config from '../config'

const DashboardApiService = {
  getUserByUsername() {
    return fetch(`${config.API_ENDPOINT}/users`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    )
  },

  getUserHabits() {
    return fetch(`${config.API_ENDPOINT}/habits`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    )
  },

  postNewHabits(text, due_date, reward, points) {
    return fetch(`${config.API_ENDPOINT}/habits`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        text,
        due_date,
        reward,
        points
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    )
  },

  deleteHabits(id) {
    return fetch(`${config.API_ENDPOINT}/habits/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    })
  },

  getUserRewards() {
    return fetch(`${config.API_ENDPOINT}/rewards`, {
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    )
  },

  postReward(reward) {
    return fetch(`${config.API_ENDPOINT}/rewards`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        reward
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    )
  },

  claimReward(id) {
    return fetch(`${config.API_ENDPOINT}/rewards/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    })
  },

  updateUserPoints(gained_points) {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        gained_points: Number(gained_points)
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    )
  }
}

export default DashboardApiService