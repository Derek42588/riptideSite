import React from 'react';
import { Link } from 'react-router-dom'
import eloPlugin from '../assets/Riptide_Elo.dll'


const Utilities = () => {
  return (
    <div className="utilities">
        <h2 className="utilities__title">Utilities</h2>
        <ul className="utilities__instructions">
            <li className="utilities__instructions-item"><a href="http://virindi.net/plugins/">VTank Bundle</a></li>
            <li className="utilities__instructions-item"><a href="https://github.com/Mag-nus/Mag-Plugins/releases/">Mag Tools</a></li>
            <li className="utilities__instructions-item"><a href="http://virindi.net/plugins/files/get.php?id=28">Skunk Vision VVS edition</a></li>
            <li className="utilities__instructions-item"><a href="https://github.com/amoeba/TownCrier">Town Crier</a></li>
            <li className="utilities__instructions-item"><a href="https://gitlab.com/trevis/dothingsbot/">Do Things Bot</a></li>
            <li className="utilities__instructions-item"><a href="https://utilitybelt.gitlab.io/">Utility Belt</a></li>
            <li className="utilities__instructions-item"><a href="http://www.immortalbob.com/phpBB3/download/file.php?id=60&sid=9c73ad1eeb734ac9df849af08e7654aa">Loot Snob Profile</a></li>
            <li className="utilities__instructions-item">Things you will not find here (ask your guild): Relogger, PK targetting plugin, metas</li>
            <li className="utilities__instructions-item"><Link to={eloPlugin} target="_blank" download>Elo Plugin</Link></li>
            <li className="utilities__instructions-item">ELO plugin instructions:</li>
            <li className="utilities__instructions-item">To refresh the ELO type "/elo" (There is a 5 minute lockout on this command to prevent people from spamming the server)</li>
            <li className="utilities__instructions-item">Clicking on a name in the Top Pks list will populate the "Search" tab with their stats.</li>
            <li className="utilities__instructions-item">Top Ranked PKs shows the top 100.</li>
            </ul>

    </div>
  );
};

export default Utilities;
