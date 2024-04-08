// Function to add an item to the wishlist
function addItem() {
  // Get the input value
  let newItemText = document.getElementById("itemInput").value.trim();

  // Check if the input is not empty
  if (newItemText !== "") {
    // Create a new list item
    let li = document.createElement("li");

    // Create a checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    // check for duplicate
    let wishlistItems = document.querySelectorAll("#wishlist li label");
    let isDuplicate = false;
    wishlistItems.forEach(function (item) {
      if (item.textContent == newItemText) {
        isDuplicate = true;
        // return isDuplicate;
      }
    });
    if (isDuplicate) {
      alert("nah bro it already exists");
      // return isDuplicate;
    }

    // Create a label for the checkbox
    let label = document.createElement("label");
    label.textContent = newItemText;

    // Append the checkbox and label to the list item
    li.appendChild(checkbox);
    li.appendChild(label);

    // Append the list item to the wishlist
    document.getElementById("wishlist").appendChild(li);

    // Clear the input field
    document.getElementById("itemInput").value = "";

    // Save the updated wishlist to localStorage
    saveToLocalStorage();
  } else {
    alert("Please enter an item.");
  }
}
function saveToLocalStorage() {
  let wislistItems = [];
  let items = document.querySelectorAll("#wishlist li");
  items.forEach((item) => {
    wislistItems.push(item.querySelector("label").textContent);
    localStorage.setItem("wishlistItems", JSON.stringify(wislistItems));
  });
  console.log(wislistItems);
}
function loadWishlistFromLocalStorage() {
  let wishlistItems = localStorage.getItem("wishlistItems");

  // Check if there are items in localStorage
  if (wishlistItems) {
    wishlistItems = JSON.parse(wishlistItems);

    // Create list items for each item in the wishlistItems array
    document.getElementById("wishlist").innerHTML = "";

    wishlistItems.forEach(function (itemText) {
      let li = document.createElement("li");
      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";

      // Check if the item is marked as completed in localStorage
      let completedItems =
        JSON.parse(localStorage.getItem("completedItems")) || [];
      if (completedItems.includes(itemText)) {
        checkbox.checked = true;
      }

      // checkbox.type = "checkbox";
      let label = document.createElement("label");
      label.textContent = itemText;
      li.appendChild(checkbox);
      li.appendChild(label);
      document.getElementById("wishlist").appendChild(li);
    });
  }
}

// Add click event listener to the "Add Item" button
document.getElementById("addItemButton").addEventListener("click", addItem);
// Load the wishlist from localStorage when the page loads
// document.addEventListener("DOMContentLoaded", function () {
//   loadWishlistFromLocalStorage();
// });
let load = document
  .getElementById("load")
  .addEventListener("click", loadWishlistFromLocalStorage);
// Add event listener to the "Clear" button to clear localStorage
document.getElementById("clear").addEventListener("click", function () {
  localStorage.removeItem("wishlistItems"); // Clear the wishlistItems from localStorage
  document.getElementById("wishlist").innerHTML = ""; // Clear the displayed wishlist
});
