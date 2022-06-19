import React from "react";
import TypeWriterEffect from 'react-typewriter-effect';

const JobType = () => {
    return(
        <TypeWriterEffect
        textStyle={{
          // textAlign: 'left',
          color: '#eebbc3',
          // fontWeight: 500,
          fontSize: '1em',
        }}
        startDelay={2000}
        cursorColor="#eebbc3"
        multiText={[
          'Full-Stack Developer',
          'Control Engineer',
        ]}
        multiTextDelay={3000}
        typeSpeed={60}
        multiTextLoop = {'true'}
      />
    )
}

export default JobType;