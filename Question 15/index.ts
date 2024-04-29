// *Question 15:* Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guestlet unableToAttend = "Nikola Telet unableToAttend = "Nikola Tesla";
let guests:string[]=["Albert Einstien","Sir kamran khan tessori","Sir zia khan"];

let unableToAttend = "Albert Einstien";
console.log(`${unableToAttend} can't make it to dinner.`);

// Replace the guest
let newGuest = "sir Bilal fareed";
guests[guests.indexOf(unableToAttend)] = newGuest;

// New invitations
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});