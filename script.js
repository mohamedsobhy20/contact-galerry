var app = angular.module("myApp", []);

app.controller("myCtrl", function ($scope) {
    /*
     *   Add contact to table function
     */
    $scope.list = [];
    $scope.addContacts = function () {

        // check if all inputs filled with data
        if ($scope.name && $scope.phone && $scope.email) {

            $scope.errMsg = '';
            // push data into contacts list array
            $scope.list.push(
                {
                    "Name" : $scope.name,
                    "Phone": $scope.phone,
                    "Email": $scope.email
                });

            // make the input fields empty
            $scope.name  = '';
            $scope.phone = '';
            $scope.email = '';

            // display warning msg if there is missing data
        } else {
            $scope.errMsg = "All Fields Are Required";
        }
    };


    /*
     * Delete Contacts Function
     */
    $scope.deleteContact = function (contactIndex) {
        $scope.list.splice(contactIndex, 1);
    };


    /*
     * Edit Contact Function
     * the first function to get the data from the table the form to be edited
     * and the second to restore the edited data into the table again
     */

    // flag to show or hide add contact and done editing buttons
    $scope.btnFlag = true;
    //array to store the contact to be edited
    var arr;

    $scope.editContact = function (contactIndex) {
        // hide add contact btn
        $scope.btnFlag = false;
        // store the data of the edited contact in the array
        arr = $scope.list[contactIndex];
        // put the edited contact in the form to be edited
        $scope.name  = arr.Name;
        $scope.phone = arr.Phone;
        $scope.email = arr.Email;
    };


    $scope.doneEditing = function () {
        // hide dine editing btn and showing add contact btn again
        $scope.btnFlag = true;
        // store the edited data in the array again
        arr.Name  = $scope.name;
        arr.Phone = $scope.phone;
        arr.Email = $scope.email;
        // make the input fields empty
        $scope.name  = '';
        $scope.phone = '';
        $scope.email = '';


    };
});