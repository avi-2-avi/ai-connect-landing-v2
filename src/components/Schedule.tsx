import React, { useState } from "react";
import { Calendar, Check } from "lucide-react";
import { events, months } from "@/data/events";
import { Event } from "@/types/event";

const Schedule = () => {
  const [selectedMonth, setSelectedMonth] = useState<number>(
    new Date().getMonth()
  );

  const getMonthEvents = (monthIndex: number) => {
    return events.filter((event) => {
      const eventMonth = months.findIndex((month) =>
        event.date.includes(month.toLowerCase())
      );
      return eventMonth === monthIndex;
    });
  };

  function convertTo24Hour(time: string): string {
    const [hourMin, period] = time.split(" ");
    let [hours, minutes] = hourMin.split(":").map(Number);

    if (period.toUpperCase() === "PM" && hours !== 12) hours += 12;
    if (period.toUpperCase() === "AM" && hours === 12) hours = 0;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}`;
  }

  const isEventPast = (event: Event): boolean => {
    const cleanDate = event.date.toLowerCase().replace(",", "").trim();
    const parts = cleanDate.split(" de ");

    if (parts.length !== 2) return false;

    const day = parseInt(parts[0]);
    const [monthName, yearStr] = parts[1].trim().split(" ");
    const year = parseInt(yearStr);
    const monthIndex = months.findIndex((m) => m === monthName.trim());

    if (monthIndex === -1 || isNaN(day) || isNaN(year)) return false;

    const time24 = convertTo24Hour(event.endTime);

    const dateStr = `${year}-${String(monthIndex + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}T${time24}:00-05:00`; // UTC-5 Lima
    const eventEnd = new Date(dateStr);
    const now = new Date();

    return eventEnd < now;
  };

  const selectedEvents = getMonthEvents(selectedMonth);

  const enhancedEvents = selectedEvents.map((event) => ({
    ...event,
    status: isEventPast(event) ? "past" : "planned",
  }));

  return (
    <section id="schedule" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-audiowide mb-12 text-center">
          Programa de <span className="text-ai-teal">eventos</span>
        </h2>

        <div className="max-w-6xl mx-auto">
          {/* Timeline navigation */}
          <div className="flex overflow-x-auto pb-4 mb-8 scrollbar-thin scrollbar-thumb-ai-teal scrollbar-track-ai-dark">
            <div className="flex space-x-2">
              {months.map((month, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                    selectedMonth === index
                      ? "bg-ai-teal text-white font-medium"
                      : "bg-ai-dark/50 text-white/70 hover:bg-ai-dark"
                  }`}
                  onClick={() => setSelectedMonth(index)}
                >
                  {month}
                </button>
              ))}
            </div>
          </div>

          {/* Events list */}
          <div className="space-y-8">
            {enhancedEvents.length > 0 ? (
              enhancedEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-ai-dark/70 border border-ai-teal/20 rounded-lg overflow-hidden shadow-lg"
                >
                  <div className="md:flex">
                    {/* Event image or placeholder */}
                    <div className="md:w-1/3">
                      {event.image ? (
                        <img
                          src={`/events/` + event.image}
                          alt={event.title}
                          className="w-full h-full object-cover md:max-h-full"
                        />
                      ) : (
                        <div className="bg-gradient-to-br from-ai-blue to-ai-dark w-full h-60 md:h-full flex items-center justify-center">
                          <Calendar className="w-12 h-12 text-ai-teal opacity-50" />
                        </div>
                      )}
                    </div>

                    {/* Event details */}
                    <div className="p-6 md:w-2/3">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl md:text-2xl font-audiowide text-white px-2.5">
                          {event.title}
                        </h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            event.status === "past"
                              ? "bg-gray-500/30 text-gray-300"
                              : "bg-ai-teal/30 text-ai-teal"
                          }`}
                        >
                          {event.status === "past" ? "Pasado" : "Programado"}
                        </span>
                      </div>

                      <p className="text-sm text-white/70 mb-4">{event.date} | {event.startTime}-{event.endTime}</p>
                      <p className="mb-6">{event.description}</p>

                      {event.registrationUrl && event.status !== "past" && (
                        <a
                          href={event.registrationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center bg-ai-purple hover:bg-ai-purple/80 text-white py-2 px-4 rounded-lg transition-colors"
                        >
                          <Check className="w-4 h-4 mr-2" />
                          Inscribirse
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 bg-ai-dark/30 rounded-lg border border-dashed border-ai-purple/30">
                <p className="text-lg text-white/70">
                  No hay eventos programados para este mes aún.
                </p>
                <p className="mt-2 text-ai-teal">
                  ¡Pronto anunciaremos nuevas fechas!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
