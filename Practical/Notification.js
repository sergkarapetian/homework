class Notification {
    getTitle() {
        return null;
    }
    getBody() {
        return null;
    }
    send() {
        if (!this.getBody()) { return }

        else if (!this.getTitle()) { console.log(`Hello, ${this.getBody}`) }

        else { console.log(`${this.title}, Hello, ${this.getBody()}`) }
    }
}

const notification = new Notification();
notification.send();

class EmailNotification extends Notification {
    getTitle() {
        return "Email Subject";
    }
    getBody() {
        return "Email Body";
    }
}

let email = new EmailNotification();

email.send() // Email Subject, Hello, Email Body

class SMSNotification extends Notification {
    getBody() {
return "SMS Body"
    }
}

const sms = new SMSNotification();
sms.send();