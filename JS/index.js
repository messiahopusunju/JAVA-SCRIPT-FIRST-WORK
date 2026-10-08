function Details (){

    let Username = document.querySelector("#Username").value;

      console.log(Username);

    let Email = document.querySelector("#Email").value;

    let Phone_number = document.querySelector("#Phone_number").value;

    let Password = document.querySelector("#Password").value;

    if (Username === "Adebayo Michael" && Email === "adebayomichael@email.com" && Phone_number === "08038352700" && Password === "1234567890")

      {

            document.querySelector("#General_Success").innerHTML = "You have successfully logged in";

      } else{

        document.querySelector("#General_Success").innerHTML = "Incorrect user details entered";
      }

    
     if(!Username){

      document.querySelector("#Username_Error").innerHTML = "Username is required";

     }else{

      document.querySelector("#Username_Error").innerHTML = "";
     }
       
      
      if(!Email){
         
         document.querySelector("#Email_Error").innerHTML = "Email is required";

      }else{

      document.querySelector("#Email_Error").innerHTML = "";
     }

      if(!Phone_number){
         
         document.querySelector("#Phone_number_Error").innerHTML = "Phone number is required";
      }else{

      document.querySelector("#Phone_number_Error").innerHTML = "";
     }

      if(!Password){
 
         document.querySelector("#Password_Error").innerHTML = "Password is required";

      }else{

      document.querySelector("#Password_Error").innerHTML = "";
     }

    }




    const submit = document.querySelector("#login");
      submit.addEventListener("click", function(event){

         Details();
      })