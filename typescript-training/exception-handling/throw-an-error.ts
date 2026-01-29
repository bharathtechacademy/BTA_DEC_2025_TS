class Student {

    // ---------- Static properties (class-level) ----------
    static rollNumber: number = 1234;
    static studentName: string = "Bharath";

    // ---------- Instance properties (object-level) ----------
    city: string = "Hyderabad";
    state: string = "Telangana";
    zip: number = 500081;

    // ---------- Instance method ----------
    fullAddress(): string {
        return this.city + ", " + this.state + " - " + this.zip;
    }

    // ---------- Static method ----------
    static nameAndId(): string {
        return this.rollNumber + ", " + this.studentName;
    }
}

// ================= USAGE =================

// Static access (no object needed)
console.log(Student.nameAndId());     // 1234, Bharath
console.log(Student.rollNumber);      // 1234

// Instance access (object required)
const student = new Student();
console.log(student.fullAddress());   // Hyderabad, Telangana - 500081
console.log(student.city);            // Hyderabad