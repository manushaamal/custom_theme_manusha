// Custom Theme JavaScript

frappe.ready(function() {
    // Add custom favicon
    $('head').append('<link rel="icon" type="image/png" href="/assets/custom_theme/images/favicon.png">');
    
    // Custom loading message
    frappe.show_progress = function(title, count, total, description) {
        // Custom progress bar styling
    };
    
    // Add custom CSS classes based on user role
    if (frappe.user_roles.includes('System Manager')) {
        $('body').addClass('admin-user');
    }
});