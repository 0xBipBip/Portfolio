// function greet(name, callback) {
//     console.log('Hello, ' + name);
//     callback();
//   }
  
//   function sayGoodbye() {
//     console.log('Goodbye!');
//   }
  
//   greet('Alice', sayGoodbye);


  function fetchData(callback) {
    setTimeout(function() {
      const data = 'Some data';
      callback(data);
    }, 2000);
  }
  
  function processData(data) {
    console.log('Processing data:', data);
  }
  
  fetchData(processData);