// Q1

let transactions = [
    { type: "deposit", amount: 100 },
    { type: "withdrawal", amount: 50 },
    { type: "deposit", amount: 200 },
    { type: "withdrawal", amount: 30 },
  ];
  
  function groupByType(transactions) {
    let grouped = {};
  
    grouped.deposit = [
      ...transactions.filter((transaction) => {
        return transaction.type === "deposit";
      }),
    ];
    grouped.withdrawal = [
      ...transactions.filter((transaction) => {
        return transaction.type === "withdrawal";
      }),
    ];
  
    return grouped;
  }
  console.log(groupByType(transactions));

//   Q2
let employees = [ 
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 },
   { name: "Charlie", age: 30 }
]
 let ageLimit =30;
    function filterEmployeesByAge(employees, ageLimit) {
        return employees.filter(employee => employee.age <= ageLimit);
    }
    console.log(filterEmployeesByAge(employees, ageLimit));

//  or console.log(employees.filter(employee => employee.age >= 30)) ;



    // Q3
    let classes = [
        ["Alice", "Bob", "Charlie"],
        ["David", "Alice", "Eve"],
        ["Frank", "George", "Bob"]
        ];
        function checkDuplicates(classes) {
        let nameSet = new Set();
        
        for (let names of classes) {
            for (let name of names) {
                if (nameSet.has(name)) {
                    return true;
                }
                nameSet.add(name);
            }
        }
        return false;
    }
        
        console.log(checkDuplicates(classes));
        // Q4
        let todayDate = new Date();

        let year = todayDate.getFullYear();
        let month= todayDate.getMonth()+1;
        let date = todayDate.getDate();

        let hours = todayDate.getHours();
        let minutes = todayDate.getMinutes();
        let seconds = todayDate.getSeconds();

        year = year < 1000 ? '0' + year : year;
        month = month < 10 ? '0' + month : month;
        date = date < 10 ? '0' + date: date;

        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        console.log(year + '-'+ month+'-'+ date+ '  ' + hours + ':'+ minutes+':'+ seconds)
        

        // Q5
        function calculateAge(birthdate) {
            let date = new Date();
            let birthday = new Date(birthdate);
          
            let age = date.getFullYear() - birthday.getFullYear();
            return age;
           
          }
            console.log(calculateAge("1990-06-15"));
        

        // Q6

        function addDays(date, days) {
            
            let result = new Date(date);

            result.setDate(result.getDate() + days);
        
            
            let year = result.getFullYear();
            let month = String(result.getMonth() + 1).padStart(2, '0'); 
            let day = String(result.getDate()).padStart(2, '0');
        
            return `${year}-${month}-${day}`;
        }
        
             console.log(addDays("2022-06-15", 10)); 

        
        // Q7

        function dateDifference(date1, date2) {
        
            let startDate = new Date(date1);
            let endDate = new Date(date2);
        

            let timeDifference = endDate - startDate;
    
            let dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
        
            return dayDifference;
        }
        
        console.log(dateDifference("2022-06-15", "2023-06-15"));

        
        // Q8
        let userPreferences = new Map();
        function setPreference(key, value) {
         userPreferences.set(key,value);
        }
        function getPreference(key) {
         return userPreferences.get(key);
        }
        setPreference("theme", "dark");
        setPreference("fontSize", "16px");
        console.log(getPreference("theme")); 
        console.log(getPreference("fontSize")); 
        
        
    // Q9


    let strings = ["apple", "banana", "apple", "orange", "banana", "apple"];
    console.log(countOccurrences(strings));
    
    function countOccurrences(arr) {
        let occurrenceMap = new Map();
    
        
        for (let i = 0; i < arr.length; i++) {
            let word = arr[i];
    
    
            if (occurrenceMap.has(word)) {
                occurrenceMap.set(word, occurrenceMap.get(word) + 1);
            } else {
                occurrenceMap.set(word, 1);
            }
        }
        return occurrenceMap;
    }
    

    
// Q10
let employeess = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

function mapEmployeeIdsToNames (employeess){
    let employeeMap = new Map();
    for(let employee of employeess){
        employeeMap.set(employee.id, employee.name);
    }
    return employeeMap;
}
let employeeMap = mapEmployeeIdsToNames(employeess);
console.log(employeeMap);

    // Q11
let inventory = new Map();

function addItem(itemName, quantity) {
   
    inventory.set(itemName, quantity);
}

function updateItemQuantity(itemName, quantity) {
    
    if (inventory.has(itemName)) {
        
        inventory.set(itemName, inventory.get(itemName) + quantity);
    } else {
       
        console.log("Item not found");
    }
}

function checkItemQuantity(itemName) {
    
    if (inventory.has(itemName)) {
       
        return inventory.get(itemName);
    } else {
        
        return 0;
    }
}


addItem("apple", 100);
addItem("banana", 150);
updateItemQuantity("apple", 50);

console.log(checkItemQuantity("apple")); 
console.log(checkItemQuantity("banana")); 
console.log(checkItemQuantity("orange")); 

// Q12
function removeDuplicates(arr) {
    
    let uniqueSet = new Set(arr);
    return [...uniqueSet];
}


let numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(numbers));


// Q13
function intersection(arr1, arr2){
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    return [...set1].filter(item => set2.has(item));
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];
console.log(intersection(arr1, arr2)); 

// Q14

function union(...arrays){
    let resultSet = new Set();
    for(let arr of arrays){
        for(let item of arr){
            resultSet.add(item);
        }
    }
    return [...resultSet];
    
}

let array1 = [1, 2, 3];
let array2 = [3, 4, 5];
let array3 = [5, 6, 7];
console.log(union(array1, array2, array3));


// Q15

let mySet = new Set([1, 2, 3, 4, 5]);
let itemsToRemove = [2, 3];
removeItemsFromSet(itemsToRemove, mySet);

function removeItemsFromSet(items, set) {
    
    for (let item of items) {
        
        set.delete(item);
    }
}



console.log([...mySet]); 

// Q16

let overallAttendance = new Set(["Alice", "Bob"]);
let todayAttendance = ["Charlie", "Alice"];

function updateAttendance(newAttendance, overallAttendance) {
    for (let student of newAttendance) {
        overallAttendance.add(student);
    }
    return overallAttendance;
}



overallAttendance = updateAttendance(todayAttendance, overallAttendance);
console.log([...overallAttendance]);







































