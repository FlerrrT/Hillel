function student(name, surname, yearOfBirth) {
    this.name = name;
    this.surname = surname;
    this.yearOfBirth = yearOfBirth;


    this.marks = [100, 100, 100, 100, 80];
    this.attendance = new Array();
    this.summary = function () {
        let _getAverageAttendance = this.getAverageAttendance()
        let _getAverageMark = this.getAverageMark();
        if (_getAverageMark > 90 && _getAverageAttendance > 0.9) {
            console.log("Молодець!");
        }
        else if (_getAverageMark > 90 || _getAverageAttendance > 0.9) {
            console.log("Добре, але можна краще...");
        }
        else {
            console.log("Редиска!");
        }

    }
    this.getAverageAttendance = function () {
        let averageAttendance = 0;
        for (let i = 0; i < this.attendance.length; i++)
            if (this.attendance[i]) {
                averageAttendance += 1;
            }
        return averageAttendance / this.attendance.length;
    }
    this.getAverageMark = function () {
        let average = 0;
        for (let i = 0; i < this.marks.length; i++) {
            average += this.marks[i];
        }
        return average / this.marks.length
    }
    this.getAge = function () {
        return new Date().getFullYear() - this.yearOfBirth
    }

    this.present = function () {
        if (this.attendance.length < 25) {
            this.attendance.push(true);
        }
        else {
            console.log("Было достигнуто максимальное кол.во записей");
        }

    }

    this.absent = function () {
        if (this.attendance.length < 25) {
            this.attendance.push(false);
        }
        else {
            console.log("Было достигнуто максимальное кол.во записей");
        }
    }

};

student1 = new student("Andrew", "Yakimenko", 2002)
student2 = new student("Petr", "Yakimenko", 2003)
student3 = new student("Vasil", "Yakimenko", 2004)