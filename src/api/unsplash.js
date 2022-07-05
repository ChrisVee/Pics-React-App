import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID ZUBkTe16cgel6LKKr_zFBObpukTGeI6wSnLspeQQF0I",
  },
});
