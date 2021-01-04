export const state = () => ({
  userid: null,
  useraccessToken: null,
  firstname: null,
  lastname: null,
  userid: null
})

export const mutations = {
  saveuserfirstname(state, value) {
    console.log('saveuserfirstname', value)
    state.firstname = value
  },
  saveuserlastname(state, value) {
    console.log('saveuserlastname', value)
    state.lastname = value
  },
  saveuserid(state, value) {
    console.log('saveuserid', value)
    state.userid = value
  },
  saveuseraccesstoken(state, value) {
    console.log('saveuseraccesstoken', value)
    state.useraccessToken = value
  }
}