//Changing from accoring to dropdown list  function

function paymentChange(value)
        {
            var frm = document.getElementById("paymentFrm");
            if (value == 1) { 
                frm.innerHTML = `<form >
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
                frm.innerHTML = `<form >
                                bKash Account No:<br>
                                <input type="text" name="account" value="">
                                <br>

                                TXT Id No:<br>
                                <input type="text" name="txtId" value="">
                                <br/>
                                Amount of Pay:<br>
                                <input type="text" name="amount" value="">
                                <br><br>
                                <input type="submit" value="Submit">
                                </form>` 
            }
            else if (value == 3){
                frm.innerHTML = `<form >
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

        //dropdown couutry, city, state

        function countryChange(value)
        {
            var state = document.getElementById("state");

            if (value == "usa") { 
                state.innerHTML = `<select>
                <option value="">State </option>
                <option value="ny">NY</option>
                <option value="la">LA</option>
                <option value="ca">CA</option>
                <option value="mi">MI</option>
            </select>`
                
            }
            else if (value == "uk") { 
                state.innerHTML = `<select>
                <option value="">State </option>
                <option value="lo">LO</option>
                <option value="ch">CH</option>
                <option value="mu">MU</option>
                <option value="li">LI</option>
            </select>`
                
            }
            else if (value == "bd") { 
                state.innerHTML = `<select id="stateForm" onchange="stChange(this.value)">
                <option value="">State </option>
                <option value="dhk">DHK</option>
                <option value="dnj">DNJ</option>
                <option value="syl">SYL</option>
                <option value="cht">CHT</option>
            </select>`
                
            }
            else if (value == "india") { 
                state.innerHTML = `<select>
                <option value="">State </option>
                <option value="nd">ND</option>
                <option value="mu">MU</option>
                <option value="kt">KT</option>
                <option value="ban">BAN</option>
            </select>`
                
            }
            else{
                country.innerHTML = "";
            }
        }

        function stChange(value){
            alert(value);
            var city = document.getElementById("city"); 
            if (value=="dhk"){ 
                city.innerHTML = `<select>
                <option value="">select city </option>
                <option value="md">Mohammadpur </option>
                <option value="ba">Badda</option>
                <option value="ba">Banani</option>
                <option value="gu">Gulshan</option>
            </select>`
            }
            if (value == "dnj"){ 
                city.innerHTML = `<select>
                <option value="">select city </option>
                <option value="ka">Kalitola </option>
                <option value="bi">Birol</option>
                <option value="bi">Birgonj</option>
                <option value="Di">Dinajpur</option>
            </select>`
            }
        }
       

        