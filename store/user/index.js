export const state = () => ({
  isLoggedIn: process.browser
    ? JSON.parse(localStorage.getItem('isLoggedIn')) || false
    : null,
  user: process.browser
    ? JSON.parse(localStorage.getItem('user')) || null
    : null,
  redirect_uri: process.env.GITHUB_REDIRECT_URI,
  backend_url: process.env.BACKEND_URL,
})

export const mutations = {
  login(state, payload) {
    state.isLoggedIn = payload.isLoggedIn
    state.user = payload.user
  },
  logout(state) {
    state.isLoggedIn = false
    state.user = null
  },
}
export const actions = {
  Login({ commit }, { isLoggedIn, user }) {
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn))
    localStorage.setItem('user', JSON.stringify(user))
    commit('login', { isLoggedIn, user })
  },
  Logout({ commit }) {
    localStorage.clear()
    commit('logout')
  },
}
