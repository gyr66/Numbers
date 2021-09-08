import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/numbers_ssm";

export default {
  getRecords(obj) {
    return axios({
      method: "get",
      url: "/record",
      params: {
        page: obj.page,
        perPage: obj.perPage
      }
    })
  },
  postRecord(obj) {
    return axios.post("/record", obj);
  }
}
