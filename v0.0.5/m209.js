//var temp = "Test"

  var Right_lugs = [];
  var Left_lugs = [];
  var Wheel1_pins = [];
  var Wheel2_pins =[];
  var Wheel3_pins = [];
  var Wheel4_pins =[];  
  var Wheel5_pins = [];
  var Wheel6_pins =[];

//var IMI_arr = ['A','A','A','A','A','A'];


//We only want to keep one of these in at a time so we need to use if statements
var local;
local = localStorage["preset"];
//Preset configuration 1: 1947
if(local === "1"){
 Wheel1_pins = [1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0];
 Wheel2_pins = [1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0];
 Wheel3_pins = [1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1];
 Wheel4_pins = [0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1];
 Wheel5_pins = [0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1];
 Wheel6_pins = [1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1];


 Left_lugs = [0,3,3,3,3,2,2,0,0,0,5,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1];
 Right_lugs = [4,0,0,5,5,5,5,5,5,5,6,6,6,6,6,6,6,0,0,0,0,0,0,0,0,0,0];
}
if(local === "2"){

//Preset configuration 2: Dec 3 1943
 Wheel1_pins = [0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0];
 Wheel2_pins = [0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1];
 Wheel3_pins = [0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1];
 Wheel4_pins = [1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1];
 Wheel5_pins = [0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0];
 Wheel6_pins = [0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1];


 Left_lugs = [2,4,5,1,1,1,1,2,2,2,2,2,2,2,3,0,0,0,0,0,0,0,0,0,0,0,0];
 Right_lugs = [4,6,6,0,0,0,0,0,0,0,0,0,0,0,0,4,5,5,5,5,5,5,5,5,5,5,5];

}
if(local === "3"){

//Preset configuration 3: Dec 4 1943
 Wheel1_pins = [0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0];
 Wheel2_pins = [1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0];
 Wheel3_pins = [1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1];
 Wheel4_pins = [0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1];
 Wheel5_pins = [0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1];
 Wheel6_pins = [0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1];

 Left_lugs = [1,2,2,2,3,4,2,2,2,2,2,2,2,2,2,3,3,3,0,0,0,0,0,0,0,0,0];
 Right_lugs = [5,5,5,5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,4,5,6,6,6,6,6,6,6];
}
if(local === "4"){

  var right;
  var left;
  var wheel1;
  var wheel2;
  var wheel3;
  var wheel4;
  var wheel5;
  var wheel6;
  right = localStorage["Right"];
  left = localStorage["Left"];
  wheel1 = localStorage["wheel1"];
  wheel2 = localStorage["wheel2"];
  wheel3 = localStorage["wheel3"];
  wheel4 = localStorage["wheel4"];
  wheel5 = localStorage["wheel5"];
  wheel6 = localStorage["wheel6"];
   Right_lugs = [];
   Left_lugs = [];
  var i = 0;
  var j = 0;
  for(i = 0; i < 54; i+=2){
    Right_lugs.push(parseInt(right[i], 10));
    Left_lugs.push(parseInt(left[i], 10));
  }
  for(j = 0; j < 34; j+=2){
    Wheel1_pins.push(parseInt(wheel1[j], 10));
    Wheel2_pins.push(parseInt(wheel2[j], 10));
    Wheel3_pins.push(parseInt(wheel3[j], 10));
    Wheel4_pins.push(parseInt(wheel4[j], 10));
    Wheel5_pins.push(parseInt(wheel5[j], 10));
    Wheel6_pins.push(parseInt(wheel6[j], 10));

  }
  for(;j < 38; j+=2){
    Wheel1_pins.push(parseInt(wheel1[j], 10));
    Wheel2_pins.push(parseInt(wheel2[j], 10));
    Wheel3_pins.push(parseInt(wheel3[j], 10));
    Wheel4_pins.push(parseInt(wheel4[j], 10));
    Wheel5_pins.push(parseInt(wheel5[j], 10));
  }
  for(;j < 42; j+=2){
    Wheel1_pins.push(parseInt(wheel1[j], 10));
    Wheel2_pins.push(parseInt(wheel2[j], 10));
    Wheel3_pins.push(parseInt(wheel3[j], 10));
    Wheel4_pins.push(parseInt(wheel4[j], 10));
  }
  for(;j < 46; j+=2){
    Wheel1_pins.push(parseInt(wheel1[j], 10));
    Wheel2_pins.push(parseInt(wheel2[j], 10));
    Wheel3_pins.push(parseInt(wheel3[j], 10));

  }
  for(;j < 50; j+=2){
    Wheel1_pins.push(parseInt(wheel1[j], 10));
    Wheel2_pins.push(parseInt(wheel2[j], 10));

  }
  for(;j < 52; j+=2){
    Wheel1_pins.push(parseInt(wheel1[j], 10));

  }




}


var Wheel_Pins = [Wheel1_pins,Wheel2_pins,Wheel3_pins,Wheel4_pins,Wheel5_pins,Wheel6_pins];

var Wheel1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var Wheel2 = 'ABCDEFGHIJKLMNOPQRSTUVXYZ';
var Wheel3 = 'ABCDEFGHIJKLMNOPQRSTUVX';
var Wheel4 = 'ABCDEFGHIJKLMNOPQRSTU';
var Wheel5 = 'ABCDEFGHIJKLMNOPQRS';
var Wheel6 = 'ABCDEFGHIJKLMNOPQ';

var Wheels = [Wheel1, Wheel2, Wheel3, Wheel4, Wheel5, Wheel6];

var Under_Wheel1 = 'PQRSTUVWXYZABCDEFGHIJKLMNO';
var Under_Wheel2 = 'OPQRSTUVXYZABCDEFGHIJKLMN';
var Under_Wheel3 = 'NOPQRSTUVXABCDEFGHIJKLM';
var Under_Wheel4 = 'MNOPQRSTUABCDEFGHIJKL';
var Under_Wheel5 = 'LMNOPQRSABCDEFGHIJK';
var Under_Wheel6 = 'KLMNOPQABCDEFGHIJK';

var Under_Wheels = [Under_Wheel1, Under_Wheel2, Under_Wheel3, Under_Wheel4, Under_Wheel5, Under_Wheel6];


//to calculatee the keys associated letter
var Wheel_displacement = [15, 14, 13, 12, 11, 10];

//Used in the actual translating over letters:
var F_Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var R_Alphabet = 'ZYXWVUTSRQPONMLKJIHGFEDCBA';

//--------------------------------------------------------------------------#
//Changes but not according to user:
var Active_Wheels = [0,0,0,0,0,0];
var under_wheel_index = [0,0,0,0,0,0];
var letter_count = 0;

//--------------------------------------------------------------------------#
//Supporter functions:

// return the index of the character in a word
function search_char(word,character){
	var index = 0;
	for(var i = 0; i < word.length; i++){
		if(word[i] == character){
			index = i;
		}
	}
	return index;
}

//will tell you the index of a letter on a given wheel
function find_index(Wheel, letter) {
   // console.log("In find_index, letter =  ", letter);
    var index = search_char(Wheel, letter);
   // console.log("In find_index, index = ", index);
	return index; 
}


//--------------------------------------------------------------------------#
//tester
//enter e to encrypt or d to decrypt
var visible_on_wheels=['B','B','B','B','B','B'];

function encrypt(letter, IMI_arr){

	for(var i = 0; i < 6; i++){
		visible_on_wheels[i] = IMI_arr[i].toUpperCase();
	}
	//console.log(visible_on_wheels[0],visible_on_wheels[1],visible_on_wheels[2],visible_on_wheels[3],visible_on_wheels[4],visible_on_wheels[5]);

	var encrypted_word='';
	var your_word='';


	var to_encode = letter;
	//console.log(to_encode);
	


	//This loop will check what is currently seen on the six wheels and determine
	//which letter below the wheel (unseen) is going to be used
	for(var i = 0; i < 6; i++){
		//find the index of what letter we see 
		var wheel_seen_index = find_index(Wheels[i], visible_on_wheels[i]);

		var under_wheel_letter = Under_Wheels[i][wheel_seen_index];
		
		//check which of the under wheel letters are active:
		under_wheel_index[i] = find_index(Wheels[i], under_wheel_letter);

	}

	for(var i = 0; i < 6; i++){
		if(Wheel_Pins[i][under_wheel_index[i]] == 1){ //if the letter is active, set active_wheels to 1
			Active_Wheels[i] = 1;
		}
	}
	//console.log(Active_Wheels);

	//Now we have an array telling us which wheels are active, so let's check which
	//lugs are in active positions on each of the 27 drum bars
	var countbars = 0;
	for(var i = 0; i < 6; i++){
		if (Active_Wheels[i] == 1){ //the wheel is active:
			for(var b = 0; b < 27; b++){
				if (Left_lugs[b] == (i+1)){ //the left lug is on active wheel
					countbars += 1;
				}
				else if(Right_lugs[b] == (i+1)){ //the right lug is on active wheel
					countbars+=1;
				}
			}
		}
	}	

	//The M209 gives the user the ability to have two lugs on any given bar in
	//an active (nonzero) position. If this is the case, we need to make sure we
	//aren't double counting a bar (i.e. saying it "moves left" twice). The following
	//section of code addresses that issue
	var subtract_overlap = 0   
	for(var b = 0; b < 27; b++){
		var active_on_bar = 0;
		for(var i = 0; i < 6; i++){
			if (Active_Wheels[i] == 1){
				if (Left_lugs[b] == (i+1)){
					active_on_bar += 1;
				}
				if (Right_lugs[b] == (i+1)){
					active_on_bar += 1;
				}
			}
		}
		if(active_on_bar > 1){
			subtract_overlap += 1;
		}
	}

	countbars = countbars - subtract_overlap;


	//The counter from the section of code above will give us the difference that
	//will be used when we move the letter:   
	//     -each plaintext letter maps to a ciphertext alphabet letter
	//     -then the countbars will tell us how far to shift to the left
    var to_encode_index = find_index(F_Alphabet, to_encode);
    //console.log("Index of letter to encode is ", to_encode_index);

	for(var i = 0; i < countbars; i++){
		if (to_encode_index - 1 < 0){
			to_encode_index = 25;
		}
		else{
			to_encode_index -= 1;
		}
	}

//	console.log(to_encode_index);
	var encoded = R_Alphabet[to_encode_index];
	//console.log("Encoded letter:");

	encrypted_word += encoded

	/*
	//In order to be able to continue encoding words, we need to be able to 
	//turn all the key wheels and increment the letter counter
	for(var i = 0; i < 6; i++){
		wheel_seen_index = find_index(Wheels[i], visible_on_wheels[i]);
		if (wheel_seen_index+1 >= Wheels[i].length){
			visible_on_wheels[i] = Wheels[i][0];
		}
		else{
			visible_on_wheels[i] = Wheels[i][wheel_seen_index+1];
		}
	}
	*/
			
	letter_count += 1

	for(var i = 0; i < 6; i++){
		Active_Wheels[i] = 0;
	}
	
    console.log(encoded);
    return encoded;
	//console.log(IMI_arr);
}



function decrypt (letter, IMI_arr){
	//BEGIN THE DECODE SECTION:
	for(var i = 0; i < 6; i++){
		visible_on_wheels[i] = IMI_arr[i].toUpperCase();
	}

	var decrypted_word = '';
	var letter_count  = 0;
	var to_decode = letter;

	for(var i = 0; i < 6; i++){
		//find the index of what letter we see 
		var wheel_seen_index = find_index(Wheels[i], visible_on_wheels[i]);

		var under_wheel_letter = Under_Wheels[i][wheel_seen_index];
		
		//check which of the under wheel letters are active:
		under_wheel_index[i] = find_index(Wheels[i], under_wheel_letter);

	}

	for(var i = 0; i < 6; i++){
		if(Wheel_Pins[i][under_wheel_index[i]] == 1){ //if the letter is active, set active_wheels to 1
			Active_Wheels[i] = 1;
		}
	}

	//Now we have an array telling us which wheels are active, so let's check which
	//lugs are in active positions on each of the 27 drum bars
	var countbars = 0;
	for(var i = 0; i < 6; i++){
		if (Active_Wheels[i] == 1){ //the wheel is active:
			for(var b = 0; b < 27; b++){
				if (Left_lugs[b] == (i+1)){ //the left lug is on active wheel
					countbars += 1;
				}
				else if(Right_lugs[b] == (i+1)){ //the right lug is on active wheel
					countbars+=1;
				}
			}
		}
	}	

	//The M209 gives the user the ability to have two lugs on any given bar in
	//an active (nonzero) position. If this is the case, we need to make sure we
	//aren't double counting a bar (i.e. saying it "moves left" twice). The following
	//section of code addresses that issue
	var subtract_overlap = 0   
	for(var b = 0; b < 27; b++){
		var active_on_bar = 0;
		for(var i = 0; i < 6; i++){
			if (Active_Wheels[i] == 1){
				if (Left_lugs[b] == (i+1)){
					active_on_bar += 1;
				}
				if (Right_lugs[b] == (i+1)){
					active_on_bar += 1;
				}
			}
		}
		if(active_on_bar > 1){
			subtract_overlap += 1;
		}
	}

	countbars = countbars - subtract_overlap;


	//The counter from the section of code above will give us the difference that
	//will be used when we move the letter:   
	//     -each plaintext letter maps to a ciphertext alphabet letter
	//     -then the countbars will tell us how far to shift to the left
	var to_decode_index = find_index(R_Alphabet, to_decode);

	for(var i = 0; i < countbars; i++){
		if (to_decode_index + 1 > 25){
			to_decode_index = 0;
		}
		else{
			to_decode_index += 1;
		}
	}

	var decoded = F_Alphabet[to_decode_index];
	console.log("Decoded letter:");

	if(decoded == 'Z')
		decoded = ' ';

	console.log(decoded);

	decrypted_word += decoded


	//In order to be able to continue encoding words, we need to be able to 
	//turn all the key wheels and increment the letter counter
	for(var i = 0; i < 6; i++){
		wheel_seen_index = find_index(Wheels[i], visible_on_wheels[i]);
		if (wheel_seen_index+1 >= Wheels[i].length){
			visible_on_wheels[i] = Wheels[i][0];
		}
		else{
			visible_on_wheels[i] = Wheels[i][wheel_seen_index+1];
		}
	} 
			
	letter_count += 1

	for(var i = 0; i < 6; i++){
		Active_Wheels[i] = 0;
    }
    return decoded;
}

function getLugs(){
    a = document.getElementsByTagName("select");

       var Left_lug = [];
       var Right_lug = [];
      for(i in a){
        if(i % 2 == 0){
          Left_lug.push(a[i].value);
        }
        else{
          Right_lug.push(a[i].value);
        }
      }

      
      localStorage["Right"] = Right_lug;
      localStorage["Left"] = Left_lug;

      }


      function getWheels(){
        a = document.getElementsByTagName("input");
        var wheel1 = [];
        var wheel2 = [];
        var wheel3 = [];
        var wheel4 = [];
        var wheel5 = [];
        var wheel6 = [];

        
        var j = 0;
        for(; j < 102; j++){
          if(a[j].checked){
            if(j % 6 == 0){
              wheel1.push(1);
            }
            else if(j % 6 == 1){
              wheel2.push(1);
        
            }
            else if(j % 6 == 2){
              wheel3.push(1);
        
            }    else if(j % 6 == 3){
              wheel4.push(1);
        
            }    else if(j % 6 == 4){
              wheel5.push(1);
        
            }    else if(j % 6 == 5){
              wheel6.push(1);
        
            }
          }
          else{
            if(j % 6 == 0){
              wheel1.push(0);
            }
            else if(j % 6 == 1){
              wheel2.push(0);
        
            }
            else if(j % 6 == 2){
              wheel3.push(0);
        
            }    else if(j % 6 == 3){
              wheel4.push(0);
        
            }    else if(j % 6 == 4){
              wheel5.push(0);
        
            }    else if(j % 6 == 5){
              wheel6.push(0);
        
            }
          }
        
        }
        
        for(; j < 112; j++){
          var k = j - 102;
          if(a[j].checked){
            if(k % 5 == 0){
              wheel1.push(1);
            }
            else if(k % 5 == 1){
              wheel2.push(1);
        
            }
            else if(k % 5 == 2){
              wheel3.push(1);
        
            }    else if(k % 5 == 3){
              wheel4.push(1);
        
            }    else if(k % 5 == 4){
              wheel5.push(1);
            }
           
          }
          else{
            if(k % 5 == 0){
              wheel1.push(0);
            }
            else if(k % 5 == 1){
              wheel2.push(0);
        
            }
            else if(k % 5 == 2){
              wheel3.push(0);
        
            }    else if(k % 5 == 3){
              wheel4.push(0);
        
            }    else if(k % 5 == 4){
              wheel5.push(0);
        
            }
          }
        }
        
        
        
        for(; j < 120; j++){
          var k = j - 112;
          if(a[j].checked){
            if(k % 4 == 0){
              wheel1.push(1);
            }
            else if(k % 4 == 1){
              wheel2.push(1);
        
            }
            else if(k % 4 == 2){
              wheel3.push(1);
        
            }    else if(k % 4 == 3){
              wheel4.push(1);
        
            }   
           
          }
          else{
            if(k % 4 == 0){
              wheel1.push(0);
            }
            else if(k % 4 == 1){
              wheel2.push(0);
        
            }
            else if(k % 4 == 2){
              wheel3.push(0);
        
            }    else if(k % 4 == 3){
              wheel4.push(0);
        
            }    
          }
        }
        
        
        for(; j < 123; j++){
          var k = j - 120;
          if(a[j].checked){
            if(k % 3 == 0){
              wheel1.push(1);
            }
            else if(k % 3 == 1){
              wheel2.push(1);
        
            }
            else if(k % 3 == 2){
              wheel3.push(1);
        
            }   
           
          }
          else{
            if(k % 3 == 0){
              wheel1.push(0);
            }
            else if(k % 3 == 1){
              wheel2.push(0);
        
            }
            else if(k % 3 == 2){
              wheel3.push(0);
        
            }   
          }
        }
        if(a[j].checked){
          wheel1.push(1);
        }
        else{
          wheel1.push(0);
        }
        j++;
        for(; j < 127; j++){
          var k = j - 124;
          if(a[j].checked){
            if(k % 3 == 0){
              wheel1.push(1);
            }
            else if(k % 3 == 1){
              wheel2.push(1);
        
            }
            else if(k % 3 == 2){
              wheel3.push(1);
        
            }   
           
          }
          else{
            if(k % 3 == 0){
              wheel1.push(0);
            }
            else if(k % 3 == 1){
              wheel2.push(0);
        
            }
            else if(k % 3 == 2){
              wheel3.push(0);
        
            }   
          }
        }
        for(; j < 131; j++){
          var k = j - 127;
          if(a[j].checked){
            if(k % 2 == 0){
              wheel1.push(1);
            }
            else if(k % 2 == 1){
              wheel2.push(1);
        
            }
            
           
          }
          else{
            if(k % 2 == 0){
              wheel1.push(0);
            }
            else if(k % 2 == 1){
              wheel2.push(0);
        
            }
            
          }
        }

        localStorage["wheel1"] = wheel1;
        localStorage["wheel2"] = wheel2;
        localStorage["wheel3"] = wheel3;
        localStorage["wheel4"] = wheel4;
        localStorage["wheel5"] = wheel5;
        localStorage["wheel6"] = wheel6;

        var i = 0;
        for(; i < wheel1.length; i++){
            Wheel1_pins[i] = wheel1[i];

        }
        
        for(i = 0; i < wheel2.length; i++){
            Wheel2_pins[i] = wheel2[i];
            
        }for(i = 0; i < wheel3.length; i++){
            Wheel3_pins[i] = wheel3[i];
            
        }for(i = 0; i < wheel4.length; i++){
            Wheel4_pins[i] = wheel4[i];
        }for(i = 0; i < wheel5.length; i++){
            Wheel5_pins[i] = wheel5[i];
        }for(i = 0; i < wheel6.length; i++){
            Wheel6_pins[i] = wheel6[i];
        }
        }
        var storedNames = JSON.parse(localStorage.getItem("Right_lugs"));


      