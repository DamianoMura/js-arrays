const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
//const reversedTeachers = teachers.reverse(); 
const reversedTeachers = [];
console.log(teachers);
//con il for:
for(x=teachers.length-1; x>=0 ; x--){
 reversedTeacher.push(teachers[x])
}
console.log(reversedTeachers);
// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames=[];

for(let x=0 ; x<teachers.length ; x++){
  if(teachers[x].length>=5)
  {
 longNames.push(teachers[x]);
  }
}
console.log(longNames);


// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice(teachers.indexOf("Ed"),teachers.indexOf("Ed")+1);
console.log(teachers);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers.indexOf("Fabio")>=0;
console.log(isFabioPresent);

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.toString();
console.log(teachersString);
