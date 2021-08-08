import axios from "axios";

axios.defaults.baseURL = "http://192.168.1.6:8080/Numbers";

export default {
  getRecords() {
    return axios.get("/servlet");
  },
  postRecord(obj) {
    return axios.post("/servlet", obj);
  }
}