const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

/*
const titleCased = tutorials => tutorials.map(title => 
    title.split(' ').map(title => 
      title[0].toUpperCase() + title.slice(1)
    ).join(' ')
  );
*/

function titleCased() {
  let titlesList = [];
  for (let i=0; i < tutorials.length; i++) {
    const titleCasedString = tutorials[i]
      .split(' ')
      .map( title => {
        return title[0].toUpperCase() + title.slice(1);
      })
      .join(' ');
    titlesList.push(titleCasedString);
  }

return titlesList;
}

/*
function titleCased() {
  const updatedTutorial = tutorials.map(tutorialSplit => {
     const titleCaseArr = tutorialSplit.split(" ").map(caseWord => {
        return caseWord.charAt(0).toUpperCase() + caseWord.slice(1)
      }).join(" ");
      return titleCaseArr;
     });
     return updatedTutorial;
    }; 
  }
*/