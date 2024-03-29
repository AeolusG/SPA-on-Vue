import { getUsers, getUser } from "../../api/index";
export default {
  state: {
    users: [],
    user: null,
  },

  mutations: {
    setUsers(state, users) {
      state.users = users;
    },

    setUser(state, user) {
      state.user = user;
    },

    resetUserData(state) {
      state.user = null;
    },
  },

  actions: {
    async fetchUsers(context) {
      let users = await getUsers();
      context.commit("setUsers", users);
    },

    async fetchUser(context, id) {
      let user = await getUser(id);
      context.commit("setUser", user);
    },
  },

  getters: {
    users(state) {
      return state.users;
    },

    user(state) {
      return state.user;
    },
  },
};
