$(() => { //registering that user clicked on the specific borough
  $("button").on('click', function(event) {
    event.preventDefault();
    console.log(event.target);

    //seeing what the user put it as an input & making sure the default is 10
    const userInput = event.target.innerHTML.toUpperCase();
    let numberOfRequest = $("input")[0].value;
    if (!(numberOfRequest)) {
      numberOfRequest <= 10;
    }

    //fetching the data from cityofnewyork json & using a filter to get what we specifically need
    $.ajax({
      url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json",
      type: "GET",
      data: {
        '$limit': numberOfRequest,
        agency: "NYPD",
        borough: userInput,
      },
      //pushing out the specific #s & creating police response button
    }).then(
      function(data) {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
          let entry = $("<p>");
          entry.text(`${data[i].descriptor}`);
          let button = $("<button>");
          button.text("Police Response");
          let response = $("<span>");
          response.text(`${data[i].resolution_description}`).hide();
          button.click(() => {
            response.toggle();
          });
          entry.append(button);
          entry.append(response);
          $("#results").append(entry);
        }
      },
      function() {
        console.log("bad request");
      }
    );
  });
});
