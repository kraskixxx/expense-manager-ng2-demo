System.register(['@angular/platform-browser-dynamic', './expense_app.component'], function(exports_1) {
    var platform_browser_dynamic_1, expense_app_component_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (expense_app_component_1_1) {
                expense_app_component_1 = expense_app_component_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(expense_app_component_1.ExpenseApp);
        }
    }
});
//# sourceMappingURL=main.js.map