//var temp = "Test"
//console.log("Hello World" +
	//	"bit"); 
var IMI_arr = ['A','A','A','A','A','A'];

var Wheel1_pins = [1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0];
var Wheel2_pins = [1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0];
var Wheel3_pins = [1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1];
var Wheel4_pins = [0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1];
var Wheel5_pins = [0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1];
var Wheel6_pins = [1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1];

var Wheel_Pins = [Wheel1_pins,Wheel2_pins,Wheel3_pins,Wheel4_pins,Wheel5_pins,Wheel6_pins];

var Left_lugs = [3,0,1,1,4,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0];
var Right_lugs = [6,6,6,5,5,4,4,4,4,0,0,0,0,0,0,0,0,0,0,5,5,5,5,5,5,5,5];

var Wheel1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var Wheel2 = 'ABCDEFGHIJKLMNOPQRSTUVXYZ';
var Wheel3 = 'ABCDEFGHIJKLMNOPQRSTUVX';
var Wheel4 = 'ABCDEFGHIJKLMNOPQRSTU';
var Wheel5 = 'ABCDEFGHIJKLMNOPQRS';
var Wheel6 = 'ABCDEFGHIJKLMNOPQ';

var Wheels = [Wheel1, Wheel2, Wheel3, Wheel4, Wheel5, Wheel6];
//console.log(Wheels[1][1]);

var Under_Wheel1 = 'PQRSTUVWXYZABCDEFGHIJKLMNO';
var Under_Wheel2 = 'OPQRSTUVXYZABCDEFGHIJKLMN';
var Under_Wheel3 = 'NOPQRSTUVXABCDEFGHIJKLM';
var Under_Wheel4 = 'MNOPQRSTUABCDEFGHIJKL';
var Under_Wheel5 = 'LMNOPQRSABCDEFGHIJK';
var Under_Wheel6 = 'KLMNOPQABCDEFGHIJK';
//console.log(Under_Wheel2);

var Under_Wheels = [Under_Wheel1, Under_Wheel2, Under_Wheel3, Under_Wheel4, Under_Wheel5, Under_Wheel6];
//console.log(Under_Wheels[2]);
//console.log(Under_Wheels[0][2]);

//to calculatee the keys associated letter
var Wheel_displacement = [15, 14, 13, 12, 11, 10];

//Used in the actual translating over letters:
var F_Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var R_Alphabet = 'ZYXWVUTSRQPONMLKJIHGFEDCBA';
//console.log(F_Alphabet);

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
function find_index(Wheel,letter){
	var index = search_char(Wheel, letter);
	return index; 
}


//--------------------------------------------------------------------------#
//tester
//enter e to encrypt or d to decrypt
var visible_on_wheels=['B','B','B','B','B','B'];
for(var i = 0; i < 6; i++){
	visible_on_wheels[i] = IMI_arr[i];
}
//console.log(visible_on_wheels);

var encrypted_word='';
var your_word='';

//we are harcoding this for now
var letter = 'A';
var to_encode = letter;



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

//Now we have an array telling us which wheels are active, so let's check which
//lugs are in active positions on each of the 27 drum bars
var countbars = 0;
for(var i = 0; i < 6; i++){
    if (Active_Wheels[i] == 1){ //the wheel is active:
    	for(var b = 0; b < 26; b++){
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
for(var b = 0; b < 26; b++){
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

for(var i = 0; i < countbars; i++){
    if (to_encode_index - 1 < 0){
        to_encode_index = 25;
    }
    else{
        to_encode_index -= 1;
    }
}

var encoded = R_Alphabet[to_encode_index];
console.log("Encoded letter:");
console.log(encoded);

encrypted_word += encoded


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




//BEGIN THE DECODE SECTION:
for(var i = 0; i < 6; i++){
	visible_on_wheels[i] = IMI_arr[i];
}

var decrypted_word = '';
var letter_count  = 0;
var to_decode = 'T';

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
    	for(var b = 0; b < 26; b++){
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
for(var b = 0; b < 26; b++){
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




