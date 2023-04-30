import React, {useEffect, useState} from 'react';
import BotCollection from './BotCollection';

function BotsPage() {
    const[bots, setBots] = useState([]);

    //use the useEffect Hooks to run fetch whenever page loads
    useEffect(() => {
        fetch("http://localhost:3000/bots")
            .then(r => r.json())
            .then((data) => {
                setBots(data)
            });
    })
  return (
    <div>
      <BotCollection bots={bots} />
    </div>
  )
}

export default BotsPage
