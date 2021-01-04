export const state = () => ({
  openLeftMenu: true
})

export const mutations = {
  toggleLeftMenu (state) {
    state.openLeftMenu = !state.openLeftMenu;
  }
}
