describe('simpleSignUp Module', function() {

   var html, scope, compiled, element;

   function processChange($rootScope, $compile) {
      scope = $rootScope.$new();
      compiled = $compile(html);
      element = compiled(scope);
      scope.$digest();
   }

   beforeEach(module('simpleSignUp'));

   it('should render my-title correctly', inject(function($rootScope, $compile) {
      html = "";
      html += "<div id=\"title-wrapper\">";
      html += "   <h1>Simple Sign-up Form</h1>";
      html += "   <h2>with Angular JS</h2>";
      html += "</div>";

      processChange($rootScope, $compile);

      expect(element.attr('id')).toBe('title-wrapper');
      expect(element.find('h1').length).toBe(1);
      expect(element.find('h2').length).toBe(1);
      expect(element.find('h1').html()).toContain('Sign-up');
      expect(element.find('h2').html()).toContain('Angular');
   }));

   it('should render my-form correctly', inject(function($rootScope, $compile) {

      html = "<opt-in><div class=\"brand-logo\"></div></opt-in>"

      processChange($rootScope, $compile);

      expect(element.find('div').length).toBe(1);
      expect(element.find('div').attr('class')).toContain('brand-logo');
      expect(element.find('input[type=\"text\"]').length).toBe(3);
      expect(element.find('button[type=\"submit\"]').length).toBe(1);
   }));

});