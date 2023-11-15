let getDataUser = () => {
  let promise = axios({
    method: "POST",
    url: "https://shop.cyberlearn.vn/api/Users/signup",
    responseType: "JSON",
  });
  promise
    .then(function (result) {
      console.log(result.data);
      let content = result.data;
      document.querySelector("btn-submit").onclick = content;
    })
    .catch(function (err) {
      console.log(err);
    });
};
