import { Appointment } from "./entities/appointment.entity";

export class AppointmentsRepository{
    private appointments: Appointment[];

    save(appointment: Appointment){
        try {
            this.appointments.push(appointment);
            return { "message": "Appointment scheduled!"}
        } catch (error) {
            throw new Error('Error in Appointment Repository')
        }
    }
}