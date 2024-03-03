function validate(event) {
    event.preventDefault();
    console.log("Test");
    sendRequest().then().catch;
}

async function sendRequest() {
    const senderName = document.getElementById('name').value;
    const senderMail = document.getElementById('email').value;
    const senderSubject = document.getElementById('subject').value;
    const senderType = document.getElementById('type').value;
    const senderText = document.getElementById('text-area').value;

    const webhookBody = {
        embeds: [{
            title: 'Contact Form Submitted',
            fields: [
                {name: 'Name: ', value: senderName},
                {name: 'Email: ', value: senderMail},
                {name: 'Subject: ', value: senderSubject},
                {name: 'Type: ', value: senderType}
            ],
            description: senderText
        }],
    };

    const webhookUrl = 'https://discord.com/api/webhooks/1213916063151038475/sbIqFqFUKq355Edt9vMQ4f5KcuCDbHX8KeqAt5ixhD0kMokFAj9e9uimSH2_aeR430wO';

    const response = fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookBody),
    });

    alert("Message sent successfully!");

    senderName.value = "";
    senderMail.value = "";
    senderSubject.value = "";
    senderType.value = "";
    senderText.value = "";
  };

  window.validate = validate;