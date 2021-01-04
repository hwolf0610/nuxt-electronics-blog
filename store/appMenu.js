export const state = () => ({
    currentMenu: 'button-setting'
  })
  
  export const mutations = {
    changeRightMenu(state, value) {
      state.currentMenu = value
    }
  }
  
  // export const actions = {
  //   add ({ commit }) {
  //     commit('add') 
  //   }
  // }