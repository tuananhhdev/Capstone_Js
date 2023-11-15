let getDataUser = () => {
  var promise = axios({
    method: "GET",
    url: "https://shop.cyberlearn.vn/api/Product",
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
getDataUser();
