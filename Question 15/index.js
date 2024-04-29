// *Question 15:* Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guestlet unableToAttend = "Nikola Telet unableToAttend = "Nikola Tesla";
var guests = ["Albert Einstien", "Sir kamran khan tessori", "Sir zia khan"];
var unableToAttend = "Albert Einstien";
console.log("".concat(unableToAttend, " can't make it to dinner."));
// Replace the guest
var newGuest = "sir Bilal fareed";
guests[guests.indexOf(unableToAttend)] = newGuest;
// New invitations
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
