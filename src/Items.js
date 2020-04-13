import React from 'react';
import './BodyItem'
import BodyItem from './BodyItem';

export default class Items extends React.Component {
    render() {
        return <div>
            <img src="images/s1/bigname.jpg" width="100%"/>
            <BodyItem img="images/s1/img.jpg" header="Ein paar Worte über uns">
                Seit nunmehr über 10 Jahre konnten wir uns mit unserem Vertriebskonzept für 
                Selbständige Reiseberater am Markt etablieren. Unsere Berater sind erfolgreich und erfreuen
                sich an wachsenden Umsatzzahlen. Damit sie aber auch zukünftig erfolgreich bleiben, entwickeln 
                wir unser Konzept stetig weiter.
            </BodyItem>
            <img src="images/s2/bigname.jpg" width="100%"/>
            <BodyItem img="images/s2/img.jpg" header="Erfolg" imageOnRight="true">
                Der Schlüssel zu unserem gemeinsamen Erfolg ist der, die Welt mit den Augen der Kunden zu sehen. 
                Bei uns sind Sie Reisebüroinhaber ohne Ladenlokal. Denn die Kunden buchen bei dem Reiseberater, 
                dem sie vertrauen. Dazu brauchen sie kein Schaufenster und keine festen Öffnungszeiten.
                Laufkundschaft ade - Ihre Kunden gewinnen Sie durch Ihre Netzwerke, ein
                gezieltes Marketing und durch Weiterempfehlung.
                Von uns erhalten Sie dazu Ideen, mit denen Sie Ihre
                Kunden inspirieren und begeistern können.
            </BodyItem>
            <BodyItem img="images/s3/img.jpg" header="Freiheit">
                Work-Life-Balance statt fest vorgebener Arbeitszeiten - denn 
                bei uns entscheiden Sie wann und wieviel Sie arbeiten möchten. 
                Ob neben- oder hauptberuflich - Sie bestimmen den Umfang Ihrer Tätigkeit
                und damit Ihren Verdienst. So bleibt genug Zeit für Familie, Freunde, Hobbys 
                oder einen weiteren Job. Mit unserer eigenen Software "Vito" können Sie auch 
                außerhalb Ihres Home-Offices arbeiten. Außerdem bieten wir Ihnen verschiedene 
                Möglichkeiten zur Urlaubsvertretung an, denn auch Reiseberater brauchen mal Urlaub.
            </BodyItem>
            <BodyItem img="images/s4/img.jpg" header="Unterstützung" imageOnRight="true">
                Bei uns sind Sie kein Einzelkämpfer. 
                Unser Buchungsmanagement übernimmt für Sie die Backoffice-Tätigkeiten. 
                Ihr Team Manager unterstützt Sie bei der Verwirklichung Ihrer Ziele.
                In einem Fachforum bieten wir Ihnen zudem die Möglichkeit sich mit allen Kollegen auszutauschen. 
                Fortlaufend entwickeln wir neue Marketingartikel. In monatlichen Beratertrainings (MBT),
                Schulungen, in unserem Intranet und im Weekly-Newsletter liefern wir Ihnen alle wichtigen Infos.
                Sie kümmern sich um Ihre Kunden, wir kümmern uns um Sie.
            </BodyItem>
            <img src="images/s4/bigname.jpg" width="100%"/> 
        </div>;
    }
}