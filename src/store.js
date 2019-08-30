import Vue from "vue";
import Vuex from "vuex";
import {
  UPDATE_PLAYER_LIST,
  UPDATE_TITLE,
  UPDATE_BFS_LIST
} from "./mutation-types";
import { RETRIEVE_PLAYER_LIST, SEND_PARMS_BFS } from "./action-types";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
dayjs.extend(LocalizedFormat);

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    players: [],
    tittleView: "Home",
    bfsView: "Testing initial Message"
  },
  mutations: {
    [UPDATE_PLAYER_LIST](state, payload) {
      state.players = payload.students;
    },
    [UPDATE_TITLE](state, payload) {
      state.tittleView = payload;
    },
    [UPDATE_BFS_LIST](state, payload) {
      state.bfsView = payload;
    }
  },
  actions: {
    async [RETRIEVE_PLAYER_LIST]({ commit }, payload) {
      // console.log(payload);
      // Call get Player list with magic words
      let post_response = await fetch(
        "https://s.sirv.top/backStats/index.php",
        {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, cors, *same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "include", // include, *same-origin, omit
          headers: {
            // "Content-Type": "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
          },
          redirect: "follow", // manual, *follow, error
          referrer: "no-referrer", // no-referrer, *client
          body: "magicWords=" + payload // body data type must match "Content-Type" header
        }
      );
      let players_response = await post_response.json();
      if (players_response.status_code == 200) {
        players_response.students = players_response.students.map(player => {
          let birthdate_base = dayjs(
            player.birthdate_year +
              "-" +
              player.birthdate_month +
              "-" +
              player.birthdate_day
          );
          player.birthdate_locale = birthdate_base.format("LL");
          player.birthdate_relative = dayjs().from(birthdate_base, true);
          return player;
        });
        // Commit mutaion
        commit(UPDATE_PLAYER_LIST, players_response);
      }
    },
    async [SEND_PARMS_BFS]({ commit }, payload) {
      try {
        // Call get Player list with magic words
        let post_response = await fetch(
          "https://puzzle8.sirv.top/searchAlgorithms/",
          {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "include", // include, *same-origin, omit
            headers: {
              // "Content-Type": "application/json",
              "Content-Type": "application/x-www-form-urlencoded"
            },
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
            body: "max_level=" + payload // body data type must match "Content-Type" header
          }
        );
        let bfs_response = await post_response.json();
        if (bfs_response.status_code != 200)
          throw Error("Failed on response status 200");

        // Commit mutaion
        commit(UPDATE_BFS_LIST, bfs_response.resultPhrase);
      } catch (err) {
        // console.log(err);
      }
    }
  }
});
