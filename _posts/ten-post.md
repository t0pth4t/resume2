---
title: "Messing with ChatGPT"
excerpt: "Messing with ChatGPT"
coverImage: "/assets/blog/nine.webp"
date: "2022-12-20T05:35:07.322Z"
author:
    name: Me
    picture: "/assets/blog/authors/avatar.png"
ogImage:
    url: "/assets/blog/nine.webp"
---

# Messing With ChatGPT

## Write a function to count duplicate keys in JavaScript object

Here is what Github Copilot came up with:

```javascript
const countDuplicates = (obj) => {
  const values = Object.values(obj);
  const uniqueValues = new Set(values);
  return values.length - uniqueValues.size;
};
```

Here is what ChatGPT came up with:

```javascript
function countDuplicates(obj) {
  // Create a dictionary to store the count of each value
  const counts = {};

  // Iterate over the object
  for (const item of obj) {
    // If the value is already in the dictionary, increment its count
    if (counts[item.id]) {
      counts[item.id] += 1;
    } else {
      // Otherwise, add the value to the dictionary with a count of 1
      counts[item.id] = 1;
    }
  }

  // Filter the dictionary to only include values with a count greater than 1
  const duplicates = Object.keys(counts).filter(key => counts[key] > 1);

  // Return the length of the array of duplicate values
  return duplicates.length;
}
```

Here is what I came up with:

```javascript
const countDuplicates = (obj) => {
   const dupes = obj.reduce((acc, curr) => {
      if(!acc[curr.id]){
         acc[curr.id] = 0;
      }
      acc[curr.id] += 1;
      return acc;
   }, {});
   return obj.filter(val => dupes[val.id] > 1);
}
```
