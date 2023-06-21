import React from "react"
import { Map, Marker } from "pigeon-maps"

function MapPage() {

    const generateKey = (pre: string) => {
        return `${ pre }_${ new Date().getTime() }`;
    }
    const addMemory = (e: any) => {
        localStorage.setItem(generateKey("memory"), JSON.stringify(e));
    }

    const logEvent = (e: any) => {
        console.log(e);
        addMemory(e);
    }

  return (
    <Map height={300} defaultCenter={[50.879, 20.6997]} defaultZoom={11} onClick={logEvent}>
      <Marker width={50} anchor={[43.4643, -80.5204]} />
    </Map>
  )
}

export default MapPage