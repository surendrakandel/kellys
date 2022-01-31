import React from "react";
import { CalendlyEventListener, EventScheduledEvent, InlineWidget } from 'react-calendly'
import KhemDai from "../assets/khemdai.jpg";
// @material-ui/icons



export  function Books() {
  return (
    <div id="book_a_meeting">
       <InlineWidget url="https://calendly.com/rakeshneupane2045/15min" />
    </div>
  );
}
export default function Book({
    iframeSrc = 'https://calendly.com/rakeshneupane2045/15min' 
})  {
    // const { posthog } = useValues(posthogAnalyticsLogic)
    // const calendlyEventScheduled = (e) => {
    //     const { event, payload = null } = e.data
    //     posthog?.capture(event, {
    //         calendly_event_uri: payload?.event.uri,
    //         calendly_invitee_uri: payload?.invitee.uri,
    //     })
    // }

    return (
        <section style={{backgroundColor:"rgb(10,42,85)", height:"900px",minWidth:"500px" ,margin:"auto" }} id="book_a_meeting">
                <div  className="bg-grey-300">
                <CalendlyEventListener onEventScheduled={null} >
                    
                    <InlineWidget url={iframeSrc} styles={{height:"950px", minWidth:"400px" }}>
                        
                    </InlineWidget>
                </CalendlyEventListener>
                </div>
           
           
        </section>
    )
}
