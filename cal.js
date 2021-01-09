        // str variable to get the input in string
       // str2 variable for slicing the numbers from string

        var str="";
        var str2="";
        var count;

        // input function to take input from users through buttons

        function input(value)
        {
             str =  str + value;
             document.getElementById("ansbox").innerHTML = str;
        }

        // result function to calculate expression and display the answer 

        function result()
        {

            var k = 0;
            var num1=0;     // variable that will hold current value in the loop
            var num2=0;     // variable which holds the previous calculated value

            // loop to calculate the expression

            for(let j=0; j<str.length; j++)
            {

               //   condition if char in str is expression(+,-,/,*)

               if(str.charCodeAt(j)==43 || str.charCodeAt(j)==42 || str.charCodeAt(j)==47 || str.charCodeAt(j)==45)
                {

                   str2 = str.slice(k,j);
                   count = j;

                   num1 = Number(str2);

                   
                   // conditon for only first number so that we can evaluate next time 
                   if(k==0)
                   {   
                      var op=str[j];
                      num2 = num1;
                   }
                   
                   // condition for evaluation

                   if(k!=0)
                   {
                      if(op=='*')
                      {  
                         num2 = num2*num1
                         op = str[j];                        // to update the operation next time
                      }
                
                      else if(op=='+')
                      {
                         num2 = num2+num1;
                         op = str[j];
                      }

                      else if(op=='-')
                      {
                         num2 = num2-num1;
                         op = str[j];
                      }

                      else if(op=="/")
                      {
                         num2 = num2/num1;
                         op = str[j];
                      }
                    
                   }
                         k=j+1;

            }

               // condition if it is digit

            else
            {
                    
                // condition if last char in string is digit 

                if(str[j]==str[str.length-1])
                {
                        var str3 = str.slice(count+1,str.length);
                        num1 = Number(str3);
                        console.log(num1);
                        if(k!=0)
                        {
                            if(op=='*')
                            {  
                               num2 = num2*num1
                            }
                
                            else if(op=='+')
                            {
                                num2 = num2+num1;
                            }

                            else if(op=='-')
                            {
                               num2 = num2-num1;
                            }

                             else if(op=="/")
                            {
                               num2 = num2/num1;
                            }
                    
                        }
                        
                    }

                }

               
            
            }
            
            document.getElementById("ansbox").innerHTML=num2;
            str=num2;
        }

        function reset()
        {
           str = "";
           document.getElementById("ansbox").innerHTML = 0;
        }
