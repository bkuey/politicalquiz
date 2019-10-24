$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var president = $("input:radio[name=president]:checked").val();
    var party = $("#party").val();
    var party2 = $("#party2").val();

    if (president === 'Barack Obama'  && party === '1' && party2 === "1") {
      alert("Democrat");
    } else if (president === 'Barack Obama'  && party === '2' && party2 === "4") {
      alert("Liberal");
    }

    if (president === 'Donald Trump'  && party === '3' && party2 === "3") {
      alert("Republican")
      } else {
      alert("Undecided");
    }


    event.preventDefault();
  });
  });
