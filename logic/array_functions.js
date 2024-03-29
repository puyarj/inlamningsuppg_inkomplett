
function array_average (a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  return ("" + (sum/a.length)).substring(0, 4);
}

function array_random_element (a) {
  const random_index = get_random_number(a.length);
  return a[random_index];
}

function array_find (a, test_function) {
  for (let i = 0; i < a.length; i++) {    
    test_function(a[i]);

    if (test_function(a[i]) === true) return a[i];
    }
  
  
  // Loopar igenom arrayen a och anropar funktionen test_function med varje element i a som argument.
  // Loopen (och funktionen) avbryts när ett test_function returnerar true.
  // Funktionen returnerar elementet i a för vilken test_function returnerade true.
}

function array_filter (a, test_function) {
  let temp = [];

  for (let i = 0; i < a.length; i++) {    
    test_function(a[i]);

    if (test_function(a[i]) === true) {
      temp.push(a[i]);
    }
  }

  return temp;
  // Loopar igenom arrayen a och anropar funktionen test_function med varje element i a som argument.
  // Funktionen returnerar en ny array med alla elementet i a för vilka test_function returnerade true.
}



function array_each (a, callback) {
  // Loopar igenom arrayen a och anropar funktionen callback med varje element i a som argument.
  for (let element of a) {
    callback(element);
  }
}

function array_map (a, transform_function) {
  // Loopar igenom arrayen a och anropar funktionen transform_function med varje element i a som argument.
  // Funktionen returnerar en ny array med returvärdet av varje anrop av transform_function.
  let result = [];
  for (let i = 0; i < a.length; i++) {
    result.push(transform_function(a[i]));
  }
  return result;
}
