export const state = () => ({
  offset: 0,
  scale:5,
  viewflag:1,
  counter: 2,
  ArticlesName: " ",
  CategoryName: " ",
  DescriptionName: " ",
  Imagename: " ",
  Imageurl: " ",
})

export const mutations = {
  changeshowscale(state, value) {
    console.log('savearticlesname', value)
    state.scale = value
  },
  viewflagchange1(state) {
    state.viewflag = 2 ;
  },
  viewflagchange2(state) {
    state.viewflag = 1 ;
  },
  savearticlesname(state, value) {
    console.log('savearticlesname', value)
    state.ArticlesName = value
  },
  saveCategoryName(state, value) {
    console.log('saveCategoryName', value)
    state.CategoryName = value
  },
  saveDescriptionName(state, value) {
    console.log('saveDescriptionName', value)
    state.DescriptionName = value
  },
  ImageurlName(state, value) {
    console.log('saveDescriptionName', value)
    state.Imagename= value;
    state.Imageurl = "../../../assets/img/userBlog/"+value
  },
  increasekeyChange(state) {
    state.offset++;
  },
  decreasekeyChange(state) {
    state.offset--;
  },
  selectedkeyChange(state, value) {
    console.log('current key:=>', value)
    state.offset = value
  },
}

// export const actions = {
//   add ({ commit }) {
//     commit('add') 
//   }
// }