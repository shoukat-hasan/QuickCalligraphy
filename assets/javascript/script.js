AOS.init();

$(document).ready(function () {
    // Apply the stored theme on page load
    const storedTheme = localStorage.getItem('selectedTheme');
    
    // Apply the stored theme or fallback to default 'earthy-1'
    if (storedTheme) {
        $('body').addClass(storedTheme);
    } else {
        $('body').addClass('earthy-1'); // Default theme
    }

    // Add click event listener to all elements with the 'theme' class
    $('.theme').on('click', function (event) {
        event.preventDefault(); // Prevent default link behavior

        const selectedTheme = $(this).data('theme'); // Get the theme number (1, 2, 3, ...)

        // Remove all existing theme classes (that start with earthy, neutral, vintage, or cool)
        $('body').removeClass(function (index, className) {
            return (className.match(/\b(earthy|neutral|vintage|cool)-\d+/g) || []).join(' ');
        });

        // Apply the new theme class dynamically
        let newThemeClass = '';

        // Map the data-theme to the correct class names
        switch (selectedTheme) {
            case 1:
                newThemeClass = 'earthy-1';
                break;
            case 2:
                newThemeClass = 'earthy-2';
                break;
            case 3:
                newThemeClass = 'earthy-3';
                break;
            case 4:
                newThemeClass = 'neutral-1';
                break;
            case 5:
                newThemeClass = 'neutral-2';
                break;
            case 6:
                newThemeClass = 'vintage-1';
                break;
            case 7:
                newThemeClass = 'vintage-2';
                break;
            case 8:
                newThemeClass = 'cool-1';
                break;
            default:
                newThemeClass = 'earthy-1'; // Default to 'earthy-1' in case of any unknown value
                break;
        }

        // Apply the new theme class
        $('body').addClass(newThemeClass);

        // Store the selected theme in local storage
        localStorage.setItem('selectedTheme', newThemeClass);
    });
});
