import React from 'react';
import SearchDoctors from '../components/SearchDoctors';
import QuickAppointment from '../components/QuickAppointment';
import AppointmentBooking from '../components/AppointmentBooking';

const Doctor = () => {
    return (
        <div>
          <SearchDoctors></SearchDoctors>
          <QuickAppointment></QuickAppointment>
          <AppointmentBooking></AppointmentBooking>

        </div>
    );
};

export default Doctor;