let getDataUser = () => {
  let promise = axios({
    method: "GET",
    url: "https://shop.cyberlearn.vn/api/Product/getbyid",
    responseType: "JSON",
  });
  promise
    .then(function (result) {
      console.log(result.data);
    })
    .catch(function (err) {
      console.log(err);
    });
};
