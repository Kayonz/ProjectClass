function generateJSON() {
  document.getElementById("json-form").addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name-input").value;
    var age = document.getElementById("age-input").value;
    var email = document.getElementById("email-input").value;

    var data = {
      name: name,
      age: age,
      email: email
    };

    var json = JSON.stringify(data, null, 2);
    document.getElementById("json-result").textContent = json;
  });
}