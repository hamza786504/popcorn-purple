$(document).ready(function () {
  // Selectors
  var $hamburger = $("#hamburger");
  var $sidebar = $(".sidebar");
  var $closeSidebar = $("#close_sidebar");

  // Hamburger button click event
  $hamburger.click(function () {
    $sidebar.toggleClass("active");
  });

  // Close sidebar button click event
  $closeSidebar.click(function () {
    $sidebar.removeClass("active");
  });

  // Close sidebar when clicking outside the sidebar
  $(document).mouseup(function (e) {
    if (!$sidebar.is(e.target) && $sidebar.has(e.target).length === 0) {
      $sidebar.removeClass("active");
    }
  });

  $("#language, .language").change(function () {
    // Get the selected value
    // var selectedLanguage = $(this).val();
    // var currentPage = window.location.href.split("/");
    // currentPage.pop();

    // var urlString = currentPage.join("/");
    // console.log(selectedLanguage);



    var origin = window.location.origin;
    var languagePage = $(this).val();



    window.location.href = origin + "/" + languagePage;
  });
});
