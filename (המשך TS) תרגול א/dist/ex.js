"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemType = void 0;
// Step 1: נתון לכם אינאם - אתם רשאים להפוך אותו למשהו אחר
var ItemType;
(function (ItemType) {
    ItemType["Book"] = "book";
    ItemType["DVD"] = "dvd";
})(ItemType || (exports.ItemType = ItemType = {}));
// }
// Step 3: פונקציה מקבלת מערך של פריטים, ופונקצית פילטור. ומחזירה מערך מפולטר של פריטים
function filterItems(items, filterFn) {
    const new_arr = [];
    items.forEach((element) => {
        if (filterFn(element))
            new_arr.push(element);
    });
    return new_arr;
}
// Step 4: הפונקציה מקבלת מערך של פריטים ומדפיסה את כל המידע הרלוונטי לגבי כל פריט
// function printItemsData(items) {
// }
// Test data
const libraryItems = [
    {
        type: ItemType.Book,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
    },
    { type: ItemType.DVD, title: "Inception", duration: 148 },
    { type: ItemType.Book, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { type: ItemType.DVD, title: "Avatar", duration: 162 },
    { type: ItemType.Book, title: "Go Set a Watchman", author: "Harper Lee" },
];
// Step 5:  הדפיסו את כל המידע הנתון
const arr_data = Object.values(libraryItems);
// console.log(arr_data);
// Step 6: ממשו את פונקצית הפילטור כך שתחזיר סרטים ארוכים משעתיים והדפיסו את המערך
function fI_duration(element) {
    if (element.type === "dvd" && element.duration > 120)
        return true;
    return false;
}
// console.log(filterItems(libraryItems, fI_duration));
// Step 7:  Harper Lee ממשו את פונקצית הפילטור כך שתחזיר רק ספרים של
function fI_author(element) {
    if (element.type === "book" && element.author === "Harper Lee")
        return true;
    return false;
}
// console.log(filterItems(libraryItems, fI_author));
