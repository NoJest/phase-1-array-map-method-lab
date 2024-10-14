const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between StopPropagation and PreventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// Here when i got here

const titleCased = () => {
  const ignore = ['OO', "API", 'NaN', 'JSONP?', 'StopPropagation', 'PreventDefault?' ]
  return tutorials.map(tutorial => {
    return tutorial.split(' ').map(word => {
      if (ignore.includes(word)) {
        return word;
      }else {
      return word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
      }
    }).join(' ');
  });
};



