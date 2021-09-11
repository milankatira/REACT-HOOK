import React, {useContext} from 'react'
import { BioData } from "./ComA";

const Comc = ({ name }) => {
    const channelName = useContext(BioData);
    return <h1>Hello ComponentsC  { channelName } </h1>
}

export default Comc
