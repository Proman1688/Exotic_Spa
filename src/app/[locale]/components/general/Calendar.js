import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useMediaQuery } from 'react-responsive';

export default function CalendarioDetalle({ eventos }) {
  // Detectar tamaño de pantalla
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="p-4 w-full overflow-x-auto text-sm max-lg:text-xs">
      <div className="min-w-[300px]">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={isSmallScreen ? 'dayGridMonth' : 'timeGridWeek'}
          locale="es"
          headerToolbar={{
            left: 'prev today next',
            center: 'title',
            right: isSmallScreen
              ? 'dayGridMonth,timeGridDay'
              : 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          slotMinTime="08:00:00"
          slotMaxTime="20:00:00"
          allDaySlot={false}
          events={eventos}
          height="auto"
        />
      </div>
    </div>
  );
}
