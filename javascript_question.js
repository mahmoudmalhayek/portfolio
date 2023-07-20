function sortString(str) {
  return str.replace(/\s/g, '').toLowerCase().split('').sort().join('');
}

function isAnagramInArray(phrase, arr) {
  const sortedPhrase = sortString(phrase);

  const anagrams = arr.filter((anagram) => {
    return sortedPhrase === sortString(anagram);
  });

  return anagrams;
}

const anagrams = [
  "oz bilal tochberer",  
  "it's razorbill beachcomber", 
  "och robe tilblazer", 
  "bib chorizo cellarmaster", 
  "thor bble carizole", 
  "zll borcht aberoie", 
  "brzl orche atobile", 
  "dame shelburne characterizing", 
  "uber englishman characterized", 
  "agnes rhumbline characterized", 
  "rehab scrutinized charlemagne", 
  "dreams zurich interchangeable", 
  "bam hamster technocratic", 
  "mechatronic masterbatch", 
  "bam ratchet mechatronics"
];

console.log(isAnagramInArray("Bob Ziroll Teacher", anagrams));
