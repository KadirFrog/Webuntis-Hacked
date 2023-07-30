import { WebUntisAnonymousAuth, WebUntisElementType } from 'webuntis';

const untis = new WebUntisAnonymousAuth('school', 'xyz.webuntis.com');

await untis.login();
const classes = await untis.getClasses();
const timetable = await untis.getTimetableForToday(classes[0].id, WebUntisElementType.CLASS);
