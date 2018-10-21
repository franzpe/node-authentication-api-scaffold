const submitForm = function() {
  const userName = document.getElementsByName('userName')[0].value;
  const password = document.getElementsByName('password')[0].value;

  const body = {
    userName,
    password
  };

  axios
    .post('http://localhost:3011/api/users', body)
    .then(res =>
      alert(
        `User ${userName} has been created. Store JWT token in localstorage for further authorization. Token received: ${
          res.data.token
        }`
      )
    )
    .catch(err => alert(err));

  // Preventing from page refresh
  return false;
};
