// This feels moronic. There has got to be another way...
function getMonth(month) {
  switch(month) {
    case 0:
      return ContactsApp.Month.JANUARY;
    case 1:
      return ContactsApp.Month.FEBRUARY;
    case 2:
      return ContactsApp.Month.MARCH;
    case 3:
      return ContactsApp.Month.APRIL;
    case 4:
      return ContactsApp.Month.MAY;
    case 5:
      return ContactsApp.Month.JUNE;
    case 6:
      return ContactsApp.Month.JULY;
    case 7:
      return ContactsApp.Month.AUGUST;
    case 8:
      return ContactsApp.Month.SEPTEMBER;
    case 9:
      return ContactsApp.Month.OCTOBER;
    case 10:
      return ContactsApp.Month.NOVEMBER;
    case 11:
      return ContactsApp.Month.DECEMBER;
  }
  throw "Invalid month: " + month;
}
