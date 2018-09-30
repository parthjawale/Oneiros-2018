setTimeout(() => {
  $(".home-contact").css({
    marginTop: "-2px"
  });
}, 500);

const message = $("#contact-error");
const contactbutton = $("#home-contact-btn");

$(document).ready(() => {
  message.text("Submit");

  contactbutton.on("click", e => {
    e.preventDefault();

    const email = $("#contact-email").val();
    const name = $("#contact-name").val();
    const msg = $("#contact-message").val();

    if (validate(name, email, msg) === "email") {
      trans("Valid E-Mail Please!");
      return;
    } else if (validate(name, email, msg) === "name") {
      trans("Valid Name Please!");
      return;
    } else if (validate(name, email, msg) === "message") {
      trans("No Message?");
      return;
    } else {
      trans("Please Wait ...");
    }

    const body = {
      email: email,
      name: name,
      message: msg
    };

    fetch("/mail/checkMail.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(response => {
        console.log(response);
        if (response.code === 200) {
          trans("We'll get back to you!");
        } else if (response.code === 405) {
          trans("Fields cant be empty!");
        } else if (response.code === 406) {
          trans("Invalid E-Mail");
        }
      });
  });
});

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const validate = (name, email, message) => {
  if (!validateEmail(email)) {
    return "email";
  } else if (name.length === 0) {
    return "name";
  } else if (message.length === 0) {
    return "message";
  } else {
    return true;
  }
};

const trans = msg => {
  message.fadeOut(() => {
    message.text(msg);
  });
  message.fadeIn();
};
