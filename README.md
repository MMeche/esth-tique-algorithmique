Set up la classe
-il faut que la classe contienne la densité du tableau (entier entre 0 et 1 = proba placer un point noir)
je propose :
-high density=0.9
-mediem d=0,7
-low d=0,5
-super low d=0,3 
-la classe doit aussi contenir un autre tableau
-les objets de la classe seront nommés au pif disont tabclasse; 

//set up tableaux de données
Tableau de la taille de l'écran (screen) qui contient 16 tabclasse ; 
Pour chaque élément de screen (superfield) on remplit le tableau par 16 tabclasse; 
Pour chaque élément de superfield  (largefield) on remplit le tableau par 16 tabclasse;
Pour chaque élément de largefield  (smallfield) on remplit le tableau par 16 tabclasse;
Pour chaque élément de smallfield  (modules) on remplit le tableau par 6 tabclasse;
Pas besoin de remplir les tableaux des modules 

//dessiner 
créer un tableau avec les densités qui va nous permettre d'associer à chaque tableau une densité aléatoire tout en respectant la règle du 10 ; 3;2;1
on parcours tout les éléments de screen avec un for 
on parcours tout les éléments de superfield avec un for
on parcours tout les éléments de largefield avec un for
on parcours tout les éléments de smallfield avec un for
on parcours tout les éléments de modules avec un for
on calcule la probabilité dans chaque module de dessiner un point noir en multipliant les proba de chaque tableau
on calcule x et y en fonction de dans quel superfield,largefield,smallfield, module et pixel on est
en fonction de la proba on dessine un point noir ou non pour chaque pixels du module


