/*jshint node:true*/
module.exports = {
  normalizeEntityName: function() {},
  afterInstall: function() {
    return this.addBowerPackageToProject('kendo-ui');
  }
};
