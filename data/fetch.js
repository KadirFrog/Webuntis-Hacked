import { WebUntisAnonymousAuth, WebUntisElementType } from 'webuntis';
import * as indexjs from '../index.js';
// Assuming you have imported the required WebUntisAnonymousAuth class and other dependencies

async function getTable() {
    try {
      const untis = new WebUntisAnonymousAuth('school', 'kadmos.webuntis.com');
      await untis.login();
      const classes = await untis.getClasses();
      const timetable = await untis.getTimetableForToday(classes[0].id, WebUntisElementType.CLASS);
      console.log(timetable); // Do something with the timetable data
    } catch (error) {
      console.error('Error occurred:', error);
      // Handle the error or display a user-friendly message
    }
  }
  