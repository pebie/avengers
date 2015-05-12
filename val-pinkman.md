# Quelques Explications

Déjà, je me suis bien amusé avec ce projet, c'était plutôt sympa comme exercice.

## Les blocages
Ensuite, je n'ai pas spécialement compris ce que vous attendiez de nous pour la
mise en place de la directive qui fait changer les "status" (j'ai tenté un truc,
c'est ce dont je suis le moins fier dans mon code), j'aimerai bien donc si possible
(et après corrections ;) voir une solution alternative à ce que j'ai fait, peut-être
avec les **attrs.$observe()** que je n'ai pas su mettre en place comme je voulais
(en tout cas pas facilement et sans rajouter une autre directive par dessus).

## LocalStorage
Pour ajouter un semblant de persistance de données, j'ai implémenté un petit
système basé sur le **localStorage**, rien de bien compliqué (j'aurai effectivement
pu faire un petit serveur node pour réécrire sur le fichier mocks/heroes.json).
Dans mon HeroFactory, je fais donc une verification pour voir si la data existe en
localStorage, si oui, l'application utilisera ces données, sinon la méthode fait
appel au fichier heroes.json.

## The End
Oui The End! J'ai commenté mes fonctions, mais elles ne sont pas très complexes,
j'espère que ça vous plaira.

Booyah quoi !
