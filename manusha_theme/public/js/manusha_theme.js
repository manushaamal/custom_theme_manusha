// Custom JavaScript for your Bootstrap 5 ERPNext theme

frappe.ready(function() {
    // Login form submission handler
    $('.form-login').on('submit', function(e) {
        e.preventDefault(); // Prevent default form submission

        var usr = $('#inputEmail').val();
        var pwd = $('#inputPassword').val();

        frappe.call({
            method: "frappe.core.doctype.user.user.login",
            args: {
                usr: usr,
                pwd: pwd
            },
            callback: function(r) {
                if (r.message === "Logged In") {
                    // Redirect to desk or a custom page on successful login
                    window.location.href = "/app";
                } else {
                    // Show error message
                    frappe.msgprint(__('Invalid Login. Please try again.'));
                }
            }
        });
    });
});