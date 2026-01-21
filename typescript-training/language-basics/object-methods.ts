//Object methods in TypeScript

//1. Creating the new object. 
interface empDetails {
    empId: number ,
    empName: string,
    havingVisa?: boolean,
    address: {
        city: string,
        zipCode: number,
        state: string,
        country: string
    },
    currentRole?: string //optional property
}

let empinfo:empDetails = {
    empId: 101,
    empName: "John Doe",
    havingVisa: true,
    address: {
        city: "New York",
        zipCode: 10001,
        state: "NY",
        country: "USA"
    }
};

//2.Accessing object properties
    console.log(empinfo.empId); //Accessing using dot notation
    console.log(empinfo["empName"]); //Accessing using bracket notation

//3. Adding new property to the object
empinfo.currentRole = "Developer"; //Adding new property using dot notation
console.log(empinfo);

//4. Modifying existing property of the object
empinfo.currentRole ="Software Tester"; //Modifying existing property using dot notation
console.log(empinfo);

//5. Deleting property from the object
delete empinfo.havingVisa; //Deleting property using delete keyword
console.log(empinfo);

//6. Check whether particular properties are available or not.
console.log("havingVisa" in empinfo);
console.log("empName" in empinfo);

//7. Get all the keys from the object. 
console.log(Object.keys(empinfo));

//8. Get all the values from the object.
console.log(Object.values(empinfo));

//9. Get all the entries from the object.
console.log(Object.entries(empinfo));

//10. Iterate through the object properties using for...in loop.
for(let key in empinfo){
    console.log(key+" : "+empinfo[key as keyof empDetails]);
}

//11. Verify the data type of a particular property. 
console.log(typeof empinfo.empId);
console.log(typeof empinfo.empName);
console.log(typeof empinfo.havingVisa);

//12. Merge two different objects together. 
interface empProjectDetails {
    projectId: number,
    projectName: string,
    projectLocation: string
}

let empProjectInfo:empProjectDetails = {
    projectId: 501,
    projectName: "Alpha",
    projectLocation: "New York"
};

let mergedEmpInfo = {...empinfo, ...empProjectInfo};
console.log(mergedEmpInfo);