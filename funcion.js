document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileSubmenuButtons = document.querySelectorAll('.mobile-menu-item.has-submenu > a');
    const hasSubmenuItems = document.querySelectorAll('.menu-item.has-submenu');

    // Toggle mobile menu
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('open');
        });
    }

    // Toggle mobile submenus
    mobileSubmenuButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const submenu = this.nextElementSibling;
            const menuItem = this.parentNode;
            if (submenu && menuItem) {
                submenu.classList.toggle('open');
                menuItem.classList.toggle('open');
            }
        });
    });

    // Close desktop submenus on mouseleave (optional)
    hasSubmenuItems.forEach(item => {
        item.addEventListener('mouseleave', function() {
            const submenu = this.querySelector('.submenu');
            if (submenu) {
                submenu.style.display = 'none';
            }
        });
        item.addEventListener('mouseenter', function() {
            const submenu = this.querySelector('.submenu');
            if (submenu) {
                submenu.style.display = 'block';
            }
        });
    });
});

