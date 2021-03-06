// // This will print in the wrong order
// // we added it for you to test to make sure data is loaded
// // :rotating_light::rotating_light::rotating_light: comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i]);
// }
// // Iteration 1 using callbacks

// addFood(steak[0], "#steak", () => {
//   // ... your code here
//   addFood(steak[1], "#steak", () => {
//     addFood(steak[2], "#steak", () => {
//       addFood(steak[3], "#steak", () => {
//         addFood(steak[4], "#steak", () => {
//           addFood(steak[5], "#steak", () => {
//             addFood(steak[6], "#steak", () => {
//               addFood(steak[7], "#steak", () => {
//                 document.querySelector(
//                   "#table"
//                 ).innerHTML += `<img src="public/images/steak.jpg"/>`;
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// });

// // Iteration 2 using `.then()`
// addFood(mashPotatoes[0], "#mashPotatoes").then(() => {
//   // ... your code here
//   addFood(mashPotatoes[1], "#mashPotatoes").then(() => {
//     addFood(mashPotatoes[2], "#mashPotatoes").then(() => {
//       addFood(mashPotatoes[3], "#mashPotatoes").then(() => {
//         addFood(mashPotatoes[4], "#mashPotatoes").then(() => {
//           document.querySelector(
//             "#table"
//           ).innerHTML += `<img src="public/images/mashPotatoes.jpg"/>`;
//         });
//       });
//     });
//   });
// });
// // Iteration 3 using async and await
// async function makeFood(steps) {
//   for (step of steps) {
//     await addFood(step, "#brusselSprouts");
//   }

//   document.querySelector(
//     "#table"
//   ).innerHTML += `<img src="public/images/brusselSprouts.jpg"/>`;
// }

// async function dinnerServe() {
//   await Promise.all([
//     addFood(steak, "#steak"),
//     addFood(mashPotatoes, "#mashPotatoes"),
//     makeFood(brusselSprouts),
//   ]);
//   alert("Dinner Served");
// }
// dinnerServe();
async function makeFood(steps, id) {
  let promises = [];
  for (const step of steps) {
    console.log(step);
    promises.push(await addFood(step, id));
  }
  document.querySelector("#table").innerHTML += `<img src="images/${id.replace(
    "#",
    ""
  )}.jpg" />`;
  return promises;
}
Promise.all([
  makeFood(steak, "#steak"),
  makeFood(mashPotatoes, "#mashPotatoes"),
  makeFood(brusselSprouts, "#brusselSprouts"),
]).then((res) => {
  console.log("breakfast is made!!", res);
  document.body.innerHTML += `<button onclick="new Audio('dinnerIsServed.mp3').play()">Dinner is served.</button>`;
});
