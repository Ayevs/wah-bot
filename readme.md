## Simple discord bot with a couple commands.

I wouldn't suggest using this bot in big server's since ive only built it to be used for me and my friends and idk what sort of effects it would have being used by many at once.
I've also heard that discord might not like the fact this bot uses danboru since some of its content breaks TOS. However, this bot wasn't made to be used in any harmfull way so what you do with it is **your responsability**.

## Commands

-> **/randomimage** Looks for an image on danboru based on the tag / character name you give it.<br>
-> /ping Is a simple command to check connection to the bot.<br>
-> /sendmsg Sends a user a message. In order for this command to work you need the userID of the person you want to send the message to, you must be in the same server as the bot and you must have permissions to recieve DM's from non-friends.<br>
-> /server Gives you some basic information about the server you're in.<br>
-> /user Gives you some basic information about your account.

## Get started

- To begin using this bot / running it on your own computer you must first download all the files by clicking the green "Code" button and installing the zip.<br>
- Then once it is installed you must go to discord dev portal and create your own discord bot in order to have a token and a clientID. This can be easily done but if you arent sure here is a link to a tutorial: https://discordjs.guide/preparations/setting-up-a-bot-application.html (please make sure to give it the permissions shown in the article)<br>
- Once you have created a bot that will use the code, you must add the token and the clientID of the bot into the config.json file. You can get the token from the dev portal, and the clientID by right clicking on the bot in discord and copying the id.<br>
- To run the code and get the bot running you can do 2 things. You can chose to open your folder within your IDE of choice like visual studio and following the next step, or you can simply open the folder with all the code and rightclick while holding shift. Once you get the little menu press "Open powershell here" and follow the next step.<br>
- When you have either the powershell window open or youre using the vsc terminal you must first install all the node modules that are required to run the code. You can do that by writing "npm install" and it will automatically make a folder for them.<br>
- Finally once you have the node modules installed and the token and clientID in the config file you can begin running the bot using the command "node index.js"

## Issues

If the bot doesn't start you might have messed something up in the previous steps, or just check the error message.
But if everything is set up right, you should be able to see the bot online in the server you invited it too and you can use the slash commands.

If things still dont work after following all the steps you can try emailing me at moldovanmaniac@gmail.com or dm'ing me on discord @alexandr14.
