  function validateForm(){
            // get the user's name so we can validate it
            let FullName = document.getElementById("txtFullName").value;

            //get the user's last name so we can validate it
            let lastname = document.getElementById("txtLastName").value;

            // get users zipcode
            let zipcode = document.getElementById("txtZip").value;

            console.log("txtFirstName" + firstName);
            console.log("txtLastName" + lastname);
            onsole.log("txtZip" + zipcidee);

            
            let fullname = firstName + lastName;

            console.log("firlsName=" + lastName);

            // create a shortcut to the message area (div) on in the html
            let divMessage = document.getElementById("divMessage");

            // i am going to create an error message if the full name is either 1 or more than 10 characters 

            if (fullName.length == 1 || fullName.length > 20){
                divMessage.innerHTML = "Invalid name please try again";
             }
             // if the zipcode is not exactly 5 digits long give the user an error message
             else if (zipcode.length != 5){
                 divMessage.innerHTML = "Invalid zipcode please try again";
                }
                // if we get to this else statments it means all the input validated succesfully will give the screat message
                else{
                    // the input validated succesfully, so show the message
                    divMessage.innerHTML = "congratulations, " + fullName + "! The screat word is Validation";
                }

        }