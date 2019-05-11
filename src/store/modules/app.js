import Cookies from 'js-cookie'

const app = {
  state: {
    count:2,
    isCollapse:false,
    sidebar: {
      opened: !+Cookies.get('sidebarStatus')
    }
  },
  mutations: {
    TOGGLE_SIDEBAR: (state,fn) => {
      // state.count=state.count+1;
      if(fn)
      {
        fn(state);
      }
    }
  },
  actions: {
    ToggleSideBar: ({ commit },num) => {
      commit('TOGGLE_SIDEBAR',function(state){
        state.isCollapse=!state.isCollapse;
      })
    }
  }
}

export default app
