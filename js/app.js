// For toggling and finding number of children and other stuff is done here!

const navigation = document.getElementById("navlist");
const menu = document.getElementById("menu");

menu.addEventListener("click", () => {
    // The navigation.children.length means the following :-
    // The children inside a parent are basically an array of elements; So, here I'm finding the length of the array aka how many children are inside the nav bar.

    navigation.style.setProperty("--childrenNumber", navigation.children.length);

    //    Casually Toggling Classes to make them animate on click
    navigation.classList.toggle("active");
    menu.classList.toggle("active");
});
