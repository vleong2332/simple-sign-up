var mainApp = angular.module('simpleSignUp', []);

mainApp.controller('mainCtrl', function() {

});

mainApp.directive('myForm', function() {
	return {
		restrict: "E",
		templateUrl: "_form.html"
	}
});

mainApp.directive('optIn', function() {
	return {
		restrict: "E",
		template: "<div class='container'><ng-transclude></ng-transclude><sign-up-form></sign-up-form></div>",
		transclude: true,
		replace: true
	}
});
mainApp.directive('signUpForm', function() {
	return {
		restrict: "E",
		require: "^optIn",
		template: "<form><first-name></first-name><last-name></last-name><email></email><submit-button></submit-button></form>",
		transclude: true,
		replace: true
	}
});
mainApp.directive('firstName', function() {
	return {
		restrict: "E",
		require: "^signUpForm",
		template: "<input name='first-name' type='text' placeholder='first name' required />",
		transclude: true,
		replace: true
	}
});
mainApp.directive('lastName', function() {
	return {
		restrict: "E",
		require: "^signUpForm",
		template: "<input name='last-name' type='text' placeholder='last name' required />",
		transclude: true,
		replace: true
	}
});
mainApp.directive('email', function() {
	return {
		restrict: "E",
		require: "^signUpForm",
		template: "<input name='email' type='text' placeholder='email' required />",
		transclude: true,
		replace: true
	}
});
mainApp.directive('submitButton', function() {
	return {
		restrict: "E",
		require: "^signUpForm",
		template: "<input name='submit' type='submit' value='Giv us yr infoz' />",
		transclude: true,
		replace: true
	}
});