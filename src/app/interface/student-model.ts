export interface StudentModel {
  registrationNumber?: number;
  lastName: string;
  firstName: string;
  middleName: string;
  dateofBirth: string;
  state: string;
  gender: string;
  email: string;
  phoneNumber: number;
  emergencyContact: number;
  faculty?: string;
  department: string;
  registrationYear: number;
}
