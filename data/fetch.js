import { WebUntisAnonymousAuth, WebUntisElementType } from 'webuntis';
import * as indexjs from '../index.js';

async function getTable() {
    try {
      const untis = new WebUntisAnonymousAuth('Koenigin-Katharina-Stift', 'kadmos.webuntis.com');
      await untis.login();
      const classes = await untis.getClasses();
      const timetable = await untis.getTimetableForToday(classes[0].id, WebUntisElementType.CLASS);
      console.log(timetable);
    } catch (error) {
      alert('Error occurred:', error);
    }
  }
  