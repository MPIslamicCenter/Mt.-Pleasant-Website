# My Project Title
Islamic Center of Mt.Pleasant Website

## Description
This is the official website for the Islamic Center of Mt. Pleasant. The website allows the ability to provide announcements, learn about the area, and enables the abulity to give donations to the Islamic Center.

## How to Use
At the moment there are only 2 editable files:
1. mainAnnouncements.json
2. home.html

Please note that mainAnnouncements.json uses fields. Below details what is an empty field.

This is an empty field:
emptyField = "";

This is not an empty field:
emptyField = "I'm not empty";

### How to Use mainAnnouncements.json
This file allows the ability to enable ONE major announcment onto the website. 
This file contains 5 fields: title, message, externalLinkIfAnyOP, eventDateOP, eventTimeOP
For any annoucement the only 2 fields that NEED TO be filled are the title and message. These 2 fields are critical. Ff one or both are empty, then no annoucement will appear.

Any field with OP at the end of the field name is an optional field and does not need to be filled.
externalLinkIfAnyOP is a special field which changes the appearance of the annoucement tab as well. 


### How to use home.html
This file contains 2 editble sections: Iqama Times and General Information

How to edit Iqama Times:

To first find the code for iqama times, scroll down home.html until you see this <!-- Iqama Times STARTS HERE -->

Within this block you are looking for several lines which are identical. They should all be similar to the line below

<div class="prayer-times-line">Fajr :&nbsp;&nbsp;&nbsp;&nbsp;5:45 AM</div>

To change the time for the prayer, simply change the time. For example, changing 5:45 to 1:23

The end product shoud look like this 

<div class="prayer-times-line">Fajr :&nbsp;&nbsp;&nbsp;&nbsp;1:23 AM</div>


How to edit General Information:

General information is presented through 4 tabs called accordion blocks. You can find this section by scrolling through home.html until you come across <!-- Accordion Block STARTS HERE-->

Once you get to that section, you should see 4 blocks of code similar to the one below. Each block has 2 editable sections which represent the totality of 1 whole tab.


    <div class="accordion-content">
        <header>
            <span class="title">Jummah and Khutbah Information</span>
            <i class="fa-solid fa-plus"></i>
        </header>
        
        <p class="description">
            Khutbah starts at 2:00PM on Fridays and Jummah prayer is dependent on our Khateebs, but usual start time is 2:25PM
        </p>
    </div>

For 1 tab the 2 editable sections are this line in the header 
<span class="title">Jummah and Khutbah Information</span>
And the paragraph
<p class="description">
    Khutbah starts at 2:00PM on Fridays and Jummah prayer is dependent on our Khateebs, but usual start time is 2:25PM
</p>

Please edit these fields as you see fit, the top half is the title and the bottom half is the message which gets revealed upon click. Only edit the text between the > ... </>

## How to upload the changes?
You want to find the two files which are editable
1. mainAnnouncements.json
2. home.html
Select the file you want to edit and open.
Click the edit button which should appear top right. It should look like a pencil.
Make the changes that you want and and then press commit changes. The page will update after processing which might take a few minutes to a couple of hours.

If you are unsure of anything please reach out to the developers, as making the wrong changes might temporarily crash the website. You can also use AI to enssure you are making the correct changes.
