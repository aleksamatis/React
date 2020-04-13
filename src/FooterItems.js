import React from 'react';
import FooterItem from './FooterItem';

export default class FooterItems extends React.Component {
    render() {
        return <div className="row">
            <FooterItem header="Professionelle Technik">
                <li>myJack mit der meinereisedaten App, IRISplus, LMPlus und Bistro Portal</li>
                <li>eigene Mailadresse über Outlook und eigene Homepage</li>
                <li>Midoco CRM</li>
            </FooterItem>
            <FooterItem header="Innovative Tools">
                <li>Präsenz auf reiseberatung.de und Zugang zu unserer Online-Liveberatung</li>
                <li>Unsere Virtualisierungssoftware "Vito"</li>
                <li>eigenes Fachforum</li> 
            </FooterItem>
            <FooterItem header="Großes Portfolio">
                <li>Agenturen bei über 130 Reiseveranstaltern - alle großen und viele Spezialveranstalter</li>
                <li>Reiseversicherungen von der Hanse Merkur und Vers4U</li>
                <li>z. T. eigene Agenturen mögli</li>
            </FooterItem>
            <FooterItem header="Guter Verdienst">
                <li>hohe Provisionen und Steigerung nach Umsatz</li>
                <li>Provisionen bereits im Monat nach der Buchung</li>
                <li>geringe Fixkosten</li>
            </FooterItem>
            <FooterItem header="Umfassender Support">
                <li>Unterstützung und Betreuung durch unser Team Hannover</li>
                <li>persönliches Coaching durch unsere Team Manager</li>    
                <li>ein umfangreiches Schulungskonzept</li> 
            </FooterItem>
            <FooterItem header="Sicherheit">
                <li>Beraterhaftpflicht-Versicherung</li> 
                <li>Lösungen zur Absicherung als Reiseveranstalter zur neuen EU-PRRL</li> 
                <li>ein starker Partner der World of TUI an Ihrer Seite</li> 
            </FooterItem>
        </div>;
    }
}