"use client";

import { useState } from "react";
import { CircleCheckIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const TURKISH_WEEKDAYS_SHORT = ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"];
const TURKISH_MONTHS = [
  "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
  "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık",
];

export type AppointmentSelection = { date: Date; time: string };

interface AppointmentBookingProps {
  onContinue?: (date: Date, time: string) => void;
}

export default function AppointmentBooking({ onContinue }: AppointmentBookingProps) {
  const [date, setDate] = useState<Date | undefined>(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  });
  const [selectedTime, setSelectedTime] = useState<string | null>("10:00");

  const timeSlots = Array.from({ length: 37 }, (_, i) => {
    const totalMinutes = i * 15;
    const hour = Math.floor(totalMinutes / 60) + 9;
    const minute = totalMinutes % 60;
    return `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
  });

  // Example: a few dates shown as already booked (disabled)
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const bookedDates = [
    new Date(today.getFullYear(), today.getMonth(), today.getDate() - 2),
    new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1),
    new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
  ].filter((d) => !isNaN(d.getTime()));

  const formatDateTR = (d: Date) =>
    d.toLocaleDateString("tr-TR", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });

  return (
    <Card className="gap-0 p-0">
      <CardHeader className="flex h-max justify-center border-b !p-4 max-md:text-center">
        <CardTitle className="max-md:block max-md:w-full">Randevunuzu Planlayın</CardTitle>
      </CardHeader>
      <CardContent className="relative p-0 md:pr-48">
        <div className="p-6 max-md:flex max-md:justify-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            defaultMonth={date}
            disabled={bookedDates}
            showOutsideDays={false}
            modifiers={{
              booked: bookedDates,
            }}
            modifiersClassNames={{
              booked: "[&>button]:line-through opacity-100",
            }}
            className="bg-transparent p-0 [--cell-size:--spacing(10)]"
            classNames={{
              day_button:
                "group-data-[selected]:!bg-secondary group-data-[selected]:!text-secondary-foreground group-data-[outside]:group-data-[selected]:text-secondary-foreground",
            }}
            formatters={{
              formatCaption: (month) => `${TURKISH_MONTHS[month.getMonth()]} ${month.getFullYear()}`,
              formatWeekdayName: (date) => {
                const dayIndex = date.getDay();
                return TURKISH_WEEKDAYS_SHORT[dayIndex === 0 ? 6 : dayIndex - 1];
              },
            }}
          />
        </div>
        <div className="inset-y-0 right-0 flex w-full flex-col gap-4 border-t max-md:h-60 md:absolute md:w-48 md:border-t-0 md:border-l">
          <ScrollArea className="h-full">
            <div className="flex flex-col gap-2 p-6">
              {timeSlots.map((time) => (
                <Button
                  key={time}
                  variant={selectedTime === time ? "secondary" : "outline"}
                  onClick={() => setSelectedTime(time)}
                  className="w-full shadow-none"
                >
                  {time}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 border-t px-6 !py-5 md:flex-row">
        <div className="flex items-center gap-2 text-sm">
          {date && selectedTime ? (
            <>
              <CircleCheckIcon className="size-5 stroke-green-600 dark:stroke-green-400" />
              <span>
                Randevunuz{" "}
                <span className="font-medium">{formatDateTR(date)}</span> tarihinde, saat{" "}
                <span className="font-medium">{selectedTime}</span> için planlandı.
              </span>
            </>
          ) : (
            <>Randevunuz için tarih ve saat seçin.</>
          )}
        </div>
        <Button
          type="button"
          disabled={!date || !selectedTime}
          className="w-full md:ml-auto md:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
          variant="default"
          onClick={() => date && selectedTime && onContinue?.(date, selectedTime)}
        >
          Devam
        </Button>
      </CardFooter>
    </Card>
  );
}
