function receivesAFunction(callback) {
    callback();
  }
  //function returnsANamedFunction() {
  //  return function() {
  //      console.log('' !== '');
  //  };
  //}
  function returnsANamedFunction() {
    return function named() {
      console.log("hello world")
    }
  };

  function returnsAnAnonymousFunction() {
    return function () {
        console.log("hellooo")
    }
  };