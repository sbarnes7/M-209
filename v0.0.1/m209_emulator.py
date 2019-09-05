# -*- coding: utf-8 -*-
"""
Created on Wed Mar  6 15:58:06 2019

@author: Shannon
"""

# -*- coding: utf-8 -*-
"""
Created on Mon Feb 25 17:15:57 2019

@author: Shannon
"""

import sys
#--------------------------------------------------------------------------#
#changing values:
IMI_arr = ['A','A','A','A','A','A']  #will change each time the user starts

Wheel1_pins = [1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0]
Wheel2_pins = [1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0]
Wheel3_pins = [1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1]
Wheel4_pins = [0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1]
Wheel5_pins = [0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1]
Wheel6_pins = [1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1]

Wheel_Pins = [Wheel1_pins, Wheel2_pins, Wheel3_pins, Wheel4_pins, Wheel5_pins, Wheel6_pins]


Left_lugs = [3,0,1,1,4,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0]
Right_lugs = [6,6,6,5,5,4,4,4,4,0,0,0,0,0,0,0,0,0,0,5,5,5,5,5,5,5,5]


#--------------------------------------------------------------------------#
#Static/non-changing values:
Wheel1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
Wheel2 = 'ABCDEFGHIJKLMNOPQRSTUVXYZ'
Wheel3 = 'ABCDEFGHIJKLMNOPQRSTUVX'
Wheel4 = 'ABCDEFGHIJKLMNOPQRSTU'
Wheel5 = 'ABCDEFGHIJKLMNOPQRS'
Wheel6 = 'ABCDEFGHIJKLMNOPQ'

Wheels = [Wheel1, Wheel2, Wheel3, Wheel4, Wheel5, Wheel6]

#under wheel letter order
Under_Wheel1 = 'PQRSTUVWXYZABCDEFGHIJKLMNO'
Under_Wheel2 = 'OPQRSTUVXYZABCDEFGHIJKLMN'
Under_Wheel3 = 'NOPQRSTUVXABCDEFGHIJKLM'
Under_Wheel4 = 'MNOPQRSTUABCDEFGHIJKL'
Under_Wheel5 = 'LMNOPQRSABCDEFGHIJK'
Under_Wheel6 = 'KLMNOPQABCDEFGHIJK'

Under_Wheels = [Under_Wheel1, Under_Wheel2, Under_Wheel3, Under_Wheel4, Under_Wheel5, Under_Wheel6]

#to calculate the keys associated letter
Wheel_displacement = [15, 14, 13, 12, 11, 10 ]

#Used in the actual translating over letters:
F_Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
R_Alphabet = 'ZYXWVUTSRQPONMLKJIHGFEDCBA'


#--------------------------------------------------------------------------#
#Changes but not according to user:
Active_Wheels = [0,0,0,0,0,0]
under_wheel_index = [0,0,0,0,0,0]
letter_count = 0


#--------------------------------------------------------------------------#
#Supporter functions:

#return the index of the character in a word
def search_char(word, character):
    index = 0
    for i in range (len(word)):
        if(word[i] == character):
            index = i
            
    return index

#will tell you the index of a letter on a given wheel
def find_index(Wheel, letter):
    index = search_char(Wheel, letter)
    return index


#--------------------------------------------------------------------------#
#tester
    

#enter e to encrypt or d to decrypt

#for i in range (len(IMI_arr)):
#    visible_on_wheels[i] = IMI_arr[i]
    
visible_on_wheels = IMI_arr[:]

encrypted_word = ''
your_word = ''

letter = raw_input("enter letter to encrypt: ")
letter = letter.upper()
to_encode = letter
your_word += letter

while (to_encode.isalpha()):
    # This loop will check what is currently seen on the six wheels and determine
    # which letter below the wheel (unseen) is going to be used
    for i in range (len(Wheels)):
        
        #find the index of what letter we see
        wheel_seen_index = find_index(Wheels[i], visible_on_wheels[i])
    
        
        under_wheel_letter = Under_Wheels[i][wheel_seen_index]
        
        #check which of the under wheel letters are active:
        under_wheel_index[i] = find_index(Wheels[i], under_wheel_letter)
        
    for i in range (len(Wheels)):
        if(Wheel_Pins[i][under_wheel_index[i]] == 1):  #if the letter is active, set active_wheels to 1
            Active_Wheels[i] = 1
        

    
    # Now we have an array telling us which wheels are active, so let's check which
    # lugs are in active positions on each of the 27 drum bars
    countbars = 0
    for i in range (len(Wheels)):
        if (Active_Wheels[i] == 1): #the wheel is active:
            for b in range (0,27):
                if (Left_lugs[b] == (i+1)): #the left lug is on active wheel
                    countbars += 1
                elif(Right_lugs[b] == (i+1)): #the right lug is on active wheel
                    countbars+=1
                    
    
    # The M209 gives the user the ability to have two lugs on any given bar in
    # an active (nonzero) position. If this is the case, we need to make sure we
    # aren't double counting a bar (i.e. saying it "moves left" twice). The following
    # section of code addresses that issue
    subtract_overlap = 0   
    for b in range(27):
        active_on_bar = 0
        for i in range(len(Wheels)):
            if (Active_Wheels[i] == 1):
                if (Left_lugs[b] == (i+1)):
                    active_on_bar += 1
                if (Right_lugs[b] == (i+1)):
                    active_on_bar += 1
        if(active_on_bar > 1):
            subtract_overlap += 1
    
    
    countbars = countbars - subtract_overlap
    
    
    # The counter from the section of code above will give us the difference that
    # will be used when we move the letter:   
    #      -each plaintext letter maps to a ciphertext alphabet letter
    #      -then the countbars will tell us how far to shift to the left
    to_encode_index = find_index(F_Alphabet, to_encode)
    
    for i in range (countbars):
        if (to_encode_index - 1 < 0):
            to_encode_index = 25
        else:
            to_encode_index -= 1
    
    encoded = R_Alphabet[to_encode_index]
    print 'Enconded letter: {}'.format(encoded)
    
    encrypted_word += encoded
    
    
    
    # In order to be able to continue encoding words, we need to be able to 
    # turn all the key wheels and increment the letter counter
    for i in range (6):
        wheel_seen_index = find_index(Wheels[i], visible_on_wheels[i])
        if (wheel_seen_index+1 >= len(Wheels[i])):
            visible_on_wheels[i] = Wheels[i][0]
        else:
            visible_on_wheels[i] = Wheels[i][wheel_seen_index+1]
            
    
    
    
    letter_count += 1
    
    for i in range (6):
        Active_Wheels[i] = 0
    
    letter = 's'
    letter = raw_input("enter letter to encrypt: ")
    letter = letter.upper()
    
    your_word += letter
    
    to_encode = letter
    

 
print '\n\n----------------------------------------------------'
#print 'your text: {}'.format(your_word)
#for i in range (len(your_word)):
#    if (your_word[i] == 'Z'):
#        string.replace(your_word, 'Z', ' ')
#
#print your_word

print 'your text:',
for i in range (len(your_word)-1):
    if (your_word[i] == 'Z'):
        sys.stdout.write(' ')
        sys.stdout.flush()
    else:
        sys.stdout.write(your_word[i])
        sys.stdout.flush()

#print your_word

print '\nencrypted: {}'.format(encrypted_word)
print 'Letters encoded: {}'.format(letter_count)
print '----------------------------------------------------'

# Now, we want to decode the message one letter at a time


#for i in range (len(IMI_arr)):
#    visible_on_wheels[i] = IMI_arr[i]
visible_on_wheels = IMI_arr[:]

decrypted_word = ''
your_word = ''
letter_count = 0

letter = raw_input("enter letter to decrypt: ")
letter = letter.upper()
to_decode = letter
your_word += letter

while (to_decode.isalpha()):
    # This loop will check what is currently seen on the six wheels and determine
    # which letter below the wheel (unseen) is going to be used
    for i in range (len(Wheels)):
        
        #find the index of what letter we see
        wheel_seen_index = find_index(Wheels[i], visible_on_wheels[i])
    
        
        under_wheel_letter = Under_Wheels[i][wheel_seen_index]
        
        #check which of the under wheel letters are active:
        under_wheel_index[i] = find_index(Wheels[i], under_wheel_letter)
        
    for i in range (len(Wheels)):
        if(Wheel_Pins[i][under_wheel_index[i]] == 1):  #if the letter is active, set active_wheels to 1
            Active_Wheels[i] = 1
        
    
    # Now we have an array telling us which wheels are active, so let's check which
    # lugs are in active positions on each of the 27 drum bars
    countbars = 0
    for i in range (len(Wheels)):
        if (Active_Wheels[i] == 1): #the wheel is active:
            for b in range (0,27):
                if (Left_lugs[b] == (i+1)): #the left lug is on active wheel
                    countbars += 1
                elif(Right_lugs[b] == (i+1)): #the right lug is on active wheel
                    countbars+=1
                    
    
    # The M209 gives the user the ability to have two lugs on any given bar in
    # an active (nonzero) position. If this is the case, we need to make sure we
    # aren't double counting a bar (i.e. saying it "moves left" twice). The following
    # section of code addresses that issue
    subtract_overlap = 0   
    for b in range(27):
        active_on_bar = 0
        for i in range(len(Wheels)):
            if (Active_Wheels[i] == 1):
                if (Left_lugs[b] == (i+1)):
                    active_on_bar += 1
                if (Right_lugs[b] == (i+1)):
                    active_on_bar += 1
        if(active_on_bar > 1):
            subtract_overlap += 1
    
    
    countbars = countbars - subtract_overlap
    
    
    # The counter from the section of code above will give us the difference that
    # will be used when we move the letter:   
    #      -each plaintext letter maps to a ciphertext alphabet letter
    #      -then the countbars will tell us how far to shift to the left
    to_decode_index = find_index(R_Alphabet, to_decode)
    
    for i in range (countbars):
        if (to_decode_index + 1 > 25):
            to_decode_index = 0
        else:
            to_decode_index += 1
    
    decoded = F_Alphabet[to_decode_index]
    print 'Decoded letter: {}'.format(decoded)
    
    if(decoded == 'Z'):
        decoded = ' '
    
    decrypted_word += decoded
    
    
    
    # In order to be able to continue encoding words, we need to be able to 
    # turn all the key wheels and increment the letter counter
    for i in range (6):
        wheel_seen_index = find_index(Wheels[i], visible_on_wheels[i])
        if (wheel_seen_index+1 >= len(Wheels[i])):
            visible_on_wheels[i] = Wheels[i][0]
        else:
            visible_on_wheels[i] = Wheels[i][wheel_seen_index+1]
            
    
    letter_count += 1
    
    for i in range (6):
        Active_Wheels[i] = 0
    
    letter = 's'
    letter = raw_input("enter letter to decrypt: ")
    letter = letter.upper()
    
    your_word += letter
    
    to_decode = letter

print '\n\n----------------------------------------------------'
print 'your text:',
for i in range (len(your_word)-1):
    sys.stdout.write(your_word[i])
    sys.stdout.flush()
print ''

print 'decrypted: {}'.format(decrypted_word)
print 'Letters decoded: {}'.format(letter_count)
print '----------------------------------------------------'
