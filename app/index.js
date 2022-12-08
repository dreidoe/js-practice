const username = "joewoe";
const firstName = "Joe";
const lastName = "Woe";

const product1 = "t-shirt";
const product2 = "socks";

const total = 102;
const discount = 0.1;

if (total > 100) {
  console.log(`you get a a discount${discount * 100}% discount`);
  console.log(`Your total is now${total * (1 - discount)}`);
} else {
  console.log(`Your total is $${total}`);
}
