export class Init {

  //Bunch of data to be display
  load() {
    if (localStorage.getItem('todos') == null || localStorage.getItem('todos') == undefined) {
      console.log("Does not support localStorage");
      var todos = [
        {
          text: "First meeting today"
        },
        {
          text: "Get milk for later"
        },
        {
          text: "Get beer for later"
        },
        {
          text: "Get Chicken for later"
        },
        {
          text: "Meetng Adriana on Thursday for coffee"
        },
        {
          text: "Thinking about special dates, Adriana if possible"
        },
        {
          text: "I need to get one more pair of trousers"

      }];

      localStorage.setItem('todos', JSON.stringify(todos));
    }
    else {
      console.log("No todos found todos ... Creating!");
    }

  }

}
