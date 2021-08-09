//problem no: (1) to solution below

function seerToMon(seer) {
  if (seer < 0) {
    // negative value condition
    return "opps!! cannot negative value";
  } else {
    const mon = seer / 40; // 40 seer 1 mon
    return mon; //return to number
  }
}

const myMon = 200;
const totalMon = seerToMon(myMon); //this is function call
console.log(totalMon);

//problem no: (2) to solution below
function totalSales(shirt, pant, shoe) {
  const perShirt = 100;
  const perPant = 200;
  const perShoe = 500;
  if (shirt < 0 || pant < 0 || shoe < 0) {
    // negative value condition
    return "opps !! Product Quantity cannot be negative value";
  }
  const shirtQuantity = shirt * perShirt;
  const pantQuantity = pant * perPant;
  const shoeQuantity = shoe * perShoe;
  const totalPrice = shirtQuantity + pantQuantity + shoeQuantity;
  return totalPrice; //return to number
}
const totalSalesPrice = totalSales(1, 1, 1); //quantity apply
console.log(totalSalesPrice);

//problem no: (3) to solution below
function deliveryCost(tShirt) {
  const first100ShirtCost = 100;
  const second100ShirtCost = 80;
  const third100ShirtCost = 50;
  if (tShirt < 0) {
    // negative value condition
    return "T-shirt Quantity cannot be negative value";
  } else if (tShirt <= 100) {
    const cost = tShirt * 100;
    return cost;
  } else if (tShirt <= 200) {
    const shirt100 = 100 * first100ShirtCost;
    const restShirt = tShirt - 100;
    const shirt200 = restShirt * second100ShirtCost;
    const totalShirt = shirt100 + shirt200;
    return totalShirt;
  } else {
    const shirt100 = 100 * first100ShirtCost;
    const shirt200 = 100 * second100ShirtCost;
    const restShirt = tShirt - 200;
    const totalRestShirt = restShirt * third100ShirtCost;
    const totalShirt = shirt100 + shirt200 + totalRestShirt;
    return totalShirt;
  }
}

const shirtQuantity = deliveryCost(201);
console.log(shirtQuantity);

// problem no: (4) to solution below

function perfectFriend(friendsNames) {
  // checking friendsNames.
  for (let i = 0; i < friendsNames.length; i++) {
    const element = friendsNames[i];
    if (typeof element == "number") {
      return "Best Friend Name Cannot be Numbers.";
    }
  }
  //finding the best friend name.
  let perfectName = friendsNames[0];
  for (let i = 0; i < friendsNames.length; i++) {
    const element = friendsNames[i];
    if (element.length == 5) {
      perfectName = element;
      return perfectName; //return to string.
    }
  }
}

const friendsName = ["opu", "Nipu", "Rup", "Ahsan", "Habib"];
const bestFriend = perfectFriend(friendsName);
console.log(bestFriend);
