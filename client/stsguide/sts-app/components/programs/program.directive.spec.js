(function(){
    'use strict';

    describe('stsApp.program directive', function() {
      var $compile,
      $rootScope,
      elm,
      scope;
    


      // load the templates
      beforeEach(module('dir-templates'));

      // mock controller (so we don't have to mock all the services it uses)
      beforeEach(module('stsApp', function($provide, $controllerProvider) {
              // provide mock services and controllers
              $provide.value('guideService', function(){
              });
              $provide.value('guideDataSerice', function(){
              });
      }));

     

       // Store references to $rootScope and $compile
      // so they are available to all tests in this describe block
      beforeEach(inject(function(_$compile_, _$rootScope_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_; 
       
      }));

     

      it('Replaces program element with directive, contains expected html',  function() {
        scope = $rootScope.$new();
        elm = angular.element('<span program class="program" ></span>');
        $compile(elm, scope);
        scope.$apply();                       
        // Check that the compiled element contains the templated content
        expect(elm.html()).toContain('<ul events="" class="events">');        
      });

    });
}());