function getBirthYear(dates) {
  if (!dates || !dates.length) {
    return "Unknown";
  }
  // Assume the first date is the birth year if there are multiple dates...
  return dates[0].getYear();
}

// Defaults to current day if month and day are not given
// Returns [[Name, Year]]
function getBirthdays(month, day) {
  var curDate = new Date();
  month = month || curDate.getMonth();
  day = day || curDate.getDate();
  console.log("Getting birthdays for: " + (month + 1) + "/" + day);
  var contacts = ContactsApp.getContactsByDate(getMonth(month),
    day,
    ContactsApp.Field.BIRTHDAY);

  return contacts.map(
    function (contact) {
      return [contact.getFullName(), getBirthYear(contact.getDates(ContactsApp.Field.BIRTHDAY))];
    });
}

function main() {
  console.log("Start run");
  var birthdays = getBirthdays();
  if (!birthdays.length) {
    console.log("No birthdays today");
    return;
  }

  console.log("Birthdays today: " + birthdays.length);
  var recipient = Session.getActiveUser().getEmail();
  var template = HtmlService.createTemplateFromFile('email.html');
  template.birthdays = birthdays;
  var body = template.evaluate().getContent();
  MailApp.sendEmail({
    to: recipient,
    subject: "Birthdays today",
    htmlBody: body
  });
}
