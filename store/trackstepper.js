export const state = () => ({
  trackStep: -1
});

export const mutations = {
  incrementStep (state) {
    if(state.trackStep < 4){
      state.trackStep = state.trackStep + 1;
    }
  },
  decrementStep (state) {
    if(state.trackStep > 0){
      state.trackStep = state.trackStep - 1;
    }
  },
  set (state, {position}) {
    state.trackStep = position;
  }
};
