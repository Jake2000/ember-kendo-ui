/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-kendo-ui',
  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/kendo-ui/js/kendo.core.min.js');
    app.import(app.bowerDirectory + '/kendo-ui/js/kendo.data.min.js');
    app.import(app.bowerDirectory + '/kendo-ui/js/kendo.binder.min.js');
    app.import(app.bowerDirectory + '/kendo-ui/js/kendo.popup.min.js');
    app.import(app.bowerDirectory + '/kendo-ui/js/kendo.list.min.js');
    app.import(app.bowerDirectory + '/kendo-ui/js/kendo.fx.min.js');
    app.import(app.bowerDirectory + '/kendo-ui/js/kendo.userevents.min.js');
    app.import(app.bowerDirectory + '/kendo-ui/js/kendo.draganddrop.min.js');
    app.import(app.bowerDirectory + '/kendo-ui/js/kendo.mobile.scroller.min.js');
    app.import(app.bowerDirectory + '/kendo-ui/js/kendo.virtuallist.min.js');
    app.import(app.bowerDirectory + '/kendo-ui/js/kendo.color.min.js');
    app.import(app.bowerDirectory + '/kendo-ui/js/kendo.calendar.min.js');
    app.import(app.bowerDirectory + '/kendo-ui/js/kendo.view.min.js');

    //k-autocomplete
    app.import(app.bowerDirectory + '/kendo-ui/js/kendo.autocomplete.min.js');
    //k-colorpicker
    app.import(app.bowerDirectory + '/kendo-ui/js/kendo.colorpicker.min.js');
    //k-combobox
    app.import(app.bowerDirectory + '/kendo-ui/js/kendo.combobox.min.js');
    //k-datepicker
    app.import(app.bowerDirectory + '/kendo-ui/js/kendo.datepicker.min.js');
    //k-timepicker
    app.import(app.bowerDirectory + '/kendo-ui/js/kendo.timepicker.min.js');
    //k-datetimepicker
    app.import(app.bowerDirectory + '/kendo-ui/js/kendo.datetimepicker.min.js');
    //k-dropdownlist
    app.import(app.bowerDirectory + '/kendo-ui/js/kendo.dropdownlist.min.js');
    //k-maskedtextbox
    app.import(app.bowerDirectory + '/kendo-ui/js/kendo.maskedtextbox.min.js');
    //k-multiselect
    app.import(app.bowerDirectory + '/kendo-ui/js/kendo.multiselect.min.js');
    //k-slider
    app.import(app.bowerDirectory + '/kendo-ui/js/kendo.slider.min.js');
    //k-numerictextbox
    app.import(app.bowerDirectory + '/kendo-ui/js/kendo.numerictextbox.min.js');
  }
};
