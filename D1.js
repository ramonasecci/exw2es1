/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*stringa 

let mioNome = "Maria" 
In questo caso sto assegnando ad una variabile, 
dichiarata come mioNome, un dato di tipo Stringa, 
in quanto il contenuto "Maria" è stata scritta tra i due doppi apici. 
Anche i numeri se contenuti tra i due apici vengono considerati dati di tipo stringa. 

numerico

let miaEtà = 23 

In questo caso ho assegnato alla variabile, dichiarata come miaEtà, 
un valore numerico, quest'ultimo può essere di tipo intero o decimale
(scritto con il punto e non con la virgola), per far si che venga riconosciuto 
come tale si scrive senza apici o dopi apici.

booleano

const verifica = true 

In questo caso ho dichiarato una costante, 
alla quale ho assegnato un valore boolean. 
Una variabile o costante di questo tipo può essere solamente vera o falsa. 
Viene generalmente utilizzata in casi cui ci sono delle interrogazioni oppure delle condizioni.*/


/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name = "Ramona"

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num1 = 12

let num2 = 20

console.log(num1+num2)


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

name = "Maria"

/*const cognome = "Secci"

cognome = "Bianchi"*/


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let differenza = x - 4

console.log(differenza)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john";

let name2 = "John"

console.log (name1 == name2)

console.log (name1 == name2.toLowerCase())



