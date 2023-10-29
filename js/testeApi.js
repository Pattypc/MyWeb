import axios from "axios";

const url = "https://api.example.com/users";

axios.get(url).then((response) => {
  console.log(response.data);
});