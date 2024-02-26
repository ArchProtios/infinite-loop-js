// const btn = document.querySelector(".btn");
// const windows = document.querySelector(".window");
// const colours = ["Orangered","Blue","Yellow","Green","Orange", "Cyan","DodgerBlue", "Violet", "Navy", "Purple", "YellowGreen", "OrangeRed", "SlateBlue", "Salmon", "Crimson", "HotPink", "Magenta"];
// const count = 0;
// // btn.addEventListener('click', () => {
// //     // for( let i = 0 ; i < colours.length() ; i++){
// //     //         windows.style.backgroundColor = colours[i];
// //     //     }
// //     if ( count < colours.length()) {
// //         windows.style.backgroundColor = colours[count]
// //         count++
// //     }
// // })

// btn.addEventListener("click", () => {
//     if(index > colors.length - 1){
//         index = 0;
//         document.body.style.backgroundColor = colours[count];
//         count++
//     }
// });

var colours = ["Orangered", "Blue", "Yellow", "Green", "Orange", "Cyan", "DodgerBlue", "Violet", "Navy", "Purple", "YellowGreen", "OrangeRed", "SlateBlue", "Salmon", "Crimson", "HotPink", "Magenta"];
var index = 0;

document.querySelector(".windows").addEventListener("click", () => {
    if (colours.length - 1 > index ){
        index++
        document.body.style.backgroundColor = colours[index];
        if ( colours[index] ===  "Magenta" ) {
            index = 0
        }
    }
});