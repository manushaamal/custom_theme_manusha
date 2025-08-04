frappe.ui.ThemeSwitcher = class CustomThemeSwitcher extends frappe.ui.ThemeSwitcher {
    constructor() {
        super();
    }

    fetch_themes() {
        return new Promise((resolve) => {
            // Call the original fetch_themes to get default themes
            super.fetch_themes().then(defaultThemes => {
                this.themes = [
                    ...defaultThemes,
                    {
                        name: "manusha_theme",
                        label: __("Manusha Theme"),
                        info: __("A modern theme by Manusha"),
                    },
                ];
                resolve(this.themes);
            });
        });
    }
}; 