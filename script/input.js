function paymentChange(value)
        {
            var frm = document.getElementById("paymentFrm");
            if (value == 1) { 
                frm.innerHTML = `<form action="/action_page.php">
                                Email:<br>
                                <input type="email" name="email" value="">
                                <br>
                                Amount of Pay:<br>
                                <input type="text" name="amount" value="">
                                <br><br>
                                <input type="submit" value="Submit">
                                </form>`
                
            }
            else if (value == 2){ 
                frm.innerHTML = `<form action="/action_page.php">
                                bKash Account No:<br>
                                <input type="text" name="text" value="">
                                <br>
                                Amount of Pay:<br>
                                <input type="text" name="amount" value="">
                                <br><br>
                                <input type="submit" value="Submit">
                                </form>` 
            }
            else if (value == 3){
                frm.innerHTML = `<form action="/action_page.php">
                                Bank Name:<br>
                                <input type="text" name="text" value="">
                                <br>
                                Branch Name:<br>
                                <input type="text" name="text" value="">
                                <br>
                                Cheque No:<br>
                                <input type="text" name="text" value="">
                                <br>
                                Amount of Pay:<br>
                                <input type="text" name="amount" value="">
                                <br><br>
                                <input type="submit" value="Submit">
                                </form>` 
            }
            else { 
                frm.innerHTML = "" 
            }
   
        };



        var doc = document;
        var admission = doc.getElementById("admissionDate");
        var graduation = doc.getElementById("graduationDate");
        var birth = doc.getElementById("birthDate");
        var age = doc.getElementById("age");
        
        age.addEventListener("click", function(){
        var gradDate = new Date(graduation.value);
        var birthDate = new Date(birth.value);
        var dateDiff = new Date(gradDate - birthDate);
        var YEAR_OFFSET = 1970;
        alert("This person is " + (dateDiff.getFullYear()-YEAR_OFFSET) + " years old");
        });