/*jslint node: true */
'use strict';

$( document ).ready(function() {
    var jqueryApp = function () {
        var form = $("#loginForm");
        var user = $("#userInput");
        var password = $("#passwordInput");
        var userErrorLabel = $("#userMessage");
        var passwordErrorLabel = $("#passwordMessage");

        var addInputValidationEvent = function () {
            $(".submit").on("click", function () {
                var isUserValid, isPasswordValid;
                resetErrorMessages();
                isUserValid = validateUser();
                isPasswordValid = validatePassword();
                if (isUserValid && isPasswordValid) {
                    $('#myModal').modal('hide');
                }
            });
        };

        var resetErrorMessages = function () {
            user.parent().parent().removeClass('has-error');
            password.parent().parent().removeClass('has-error');
            userErrorLabel.text('');
            passwordErrorLabel.text('');
        };
        var validateUser = function () {
            var userPattern = /^[a-z0-9]+$/;
            if (!userPattern.test(user.val())) {
                userErrorLabel.text(' יש להשתמש רק באותיות קטנות וספרות!');
                user.parent().parent().addClass('has-error');
                return false;
            }
            return true;
        };
        var validatePassword = function(){
            if (password.val().length < 8) {
                passwordErrorLabel.text('סיסמה קצרה מדי! יש להשתמש בסיסמה מעל 8 תווים');
                password.parent().parent().addClass('has-error');
                return false;
            }
            return true;
        };

        var addEvents = function () {
            addInputValidationEvent();
        };

        var init = function() {
            addEvents();
        }();
    };

    var app = new jqueryApp();
});