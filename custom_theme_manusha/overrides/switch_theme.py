import frappe

@frappe.whitelist()
def switch_theme(theme):
    frappe.db.set_value("User", frappe.session.user, "user_style", theme)
    frappe.ui.set_theme(theme) 