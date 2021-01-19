import 'source-map-support/register';

import {ScheduledEvent, ScheduledHandler} from 'aws-lambda';

export const main: ScheduledHandler = async (scheduledEvent: ScheduledEvent) => {

  console.log(
      JSON.stringify({
        message: 'update from sls 2 / ts 4',
        scheduledEventTime: scheduledEvent.time,
      })
  );
}
