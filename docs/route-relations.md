https://community.openstreetmap.org/t/burgerbus/92656


Beim ‘network’ für die Route-Relation hängt es davon ab, ob

der Bürgerbus voll in einen Verkehrsverbund integriert ist, keine eigenen Fahrkarten hat (network=)
dann ist der Bürgerbus wie jede andere Buslinie zu behandeln, die Rechtsform des ‘operator’ ist halt speziell

der Bürgerbus eigene Fahrkarten hat, die des Verkehrsverbundes aber auch akzeptiert (network=;<bürgerbus>)

der Bürgerbus eigene Fahrkarten hat und die Fahrkarten des Verkehrsverbundes nicht akzeptiert (network=<bürgerbus>)

Beim ‘network’ für die Platform gilt ähnliches

hier halten auch Busse eines Verkehrsverbundes und die Haltestelle wird nur durch den Verkehrsverbund gepflegt …

hier halten ausschließlich Busse des Bürgerbusses

‘stop_position’ auf der Straße haben kein network, operator, … sind ja gewissermaßen virtuell.