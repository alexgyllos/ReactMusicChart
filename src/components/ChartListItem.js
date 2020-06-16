import React from 'react';

const ChartListItem = ({track, position}) => {

  return(
    <p>{(position += 1)}) {track['im:name'].label} - {track['im:artist'].label}</p>
  )
}

export default ChartListItem;
