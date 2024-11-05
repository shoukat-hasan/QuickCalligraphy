AOS.init();
$(document).ready(function () {
    // Apply the stored theme on page load
    const storedTheme = localStorage.getItem('selectedTheme');
    if (storedTheme) {
        $('body').addClass(storedTheme); // Apply the stored theme
    } else {
        $('body').addClass('theme-1'); // Fallback to default theme
    }

    // Add click event listener to all elements with the 'theme' class
    $('.theme').on('click', function (event) {
        event.preventDefault(); // Prevent default link behavior

        const selectedTheme = $(this).data('theme'); // Get the data-theme attribute

        // Remove all existing theme classes
        $('body').removeClass('theme-1 theme-2 theme-3 theme-4 theme-5 theme-6 theme-7 theme-8');

        // Apply the new theme
        const newThemeClass = `theme-${selectedTheme}`;
        $('body').addClass(newThemeClass);

        // Store the selected theme in local storage
        localStorage.setItem('selectedTheme', newThemeClass);
    });
});
