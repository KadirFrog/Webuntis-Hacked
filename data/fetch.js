import { WebUntisAnonymousAuth, WebUntisElementType } from 'webuntis';

function getTable() 
const untis = new WebUntisAnonymousAuth('school', 'kadmos.webuntis.com');{
await untis.login();
const classes = await untis.getClasses();
const timetable = await untis.getTimetableForToday(classes[0].id, WebUntisElementType.CLASS);
}