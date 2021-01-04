// https://vcalendar.io

import VCalendar from 'v-calendar';
import Vue from 'vue'

Vue.use(VCalendar, {
  componentPrefix: 'vc',  // Use <vc-calendar /> instead of <v-calendar />
  screens: {
    tablet: '576px',
    laptop: '992px',
    desktop: '1200px',
  },
});
