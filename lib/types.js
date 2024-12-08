/**
 * @typedef {Object} Doctor
 * @property {string} id - The unique ID of the doctor.
 * @property {string} name - The doctor's name.
 * @property {string} specialization - The doctor's area of specialization.
 * @property {number} experience - Years of experience the doctor has.
 * @property {number} rating - The doctor's average rating.
 * @property {string[]} availableSlots - Array of available time slots for appointments.
 * @property {string} image - URL of the doctor's image.
 */

/**
 * @typedef {Object} Appointment
 * @property {string} id - The unique ID of the appointment.
 * @property {string} doctorId - ID of the doctor associated with the appointment.
 * @property {string} patientId - ID of the patient who booked the appointment.
 * @property {string} datetime - Date and time of the appointment.
 * @property {'scheduled' | 'completed' | 'cancelled'} status - Status of the appointment.
 * @property {'in-person' | 'video'} type - Type of appointment (in-person or video).
 */

/**
 * @typedef {Object} HealthRecord
 * @property {string} id - The unique ID of the health record.
 * @property {string} patientId - ID of the patient associated with the health record.
 * @property {'prescription' | 'lab-result' | 'medical-history'} type - Type of health record.
 * @property {string} date - Date of the record.
 * @property {string} title - Title of the health record.
 * @property {string} content - Content of the record.
 * @property {string} [doctorId] - (Optional) ID of the doctor associated with the record.
 */

/**
 * @typedef {Object} User
 * @property {string} id - The unique ID of the user.
 * @property {string} name - The user's name.
 * @property {string} email - The user's email address.
 * @property {'patient' | 'doctor' | 'admin'} role - Role of the user in the system.
 * @property {string} [image] - (Optional) URL of the user's profile image.
 */
