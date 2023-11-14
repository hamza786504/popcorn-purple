$(document).ready(function () {
    // Selectors
    var $hamburger = $('#hamburger');
    var $sidebar = $('.sidebar');
    var $closeSidebar = $('#close_sidebar');

    // Hamburger button click event
    $hamburger.click(function () {
      $sidebar.toggleClass('active');
    });

    // Close sidebar button click event
    $closeSidebar.click(function () {
      $sidebar.removeClass('active');
    });

    // Close sidebar when clicking outside the sidebar
    $(document).mouseup(function (e) {
      if (!$sidebar.is(e.target) && $sidebar.has(e.target).length === 0) {
        $sidebar.removeClass('active');
      }
    });
  });