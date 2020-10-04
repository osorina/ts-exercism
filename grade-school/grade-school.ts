type StudentList = Array<string>; // replace with ReadonlyArray to prevent pushing on compilation step
type StudentRoster = Map<string, StudentList>;

class GradeSchool {
    protected students: StudentRoster = new Map();

    protected get studentsCopy(): StudentRoster {
        let temp = new Map();

        this.students.forEach((key, value) => temp.set(key, [...(value || [])]));

        return temp;
    }

    studentRoster(): StudentRoster {
        return this.studentsCopy;
    }

    addStudent(name: string, grade: number): void {
        const gradeToUse = String(grade);
        const studentList: StudentList = [...this.studentsInGrade(gradeToUse), name].sort();

        this.students.set(gradeToUse, studentList);
    }

    studentsInGrade(grade: string | number): string[] {
        return [...(this.students.get(String(grade)) || [])].sort();
    }
}

export default GradeSchool;
