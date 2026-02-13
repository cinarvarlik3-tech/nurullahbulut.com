"use client";

import { useState } from "react";
import {
  Stepper,
  StepperContent,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperPanel,
  StepperTitle,
  StepperTrigger,
} from "@/components/ui/stepper";
import AppointmentBooking from "@/components/ui/appointment-booking";
import type { AppointmentSelection } from "@/components/ui/appointment-booking";
import RandevuContactStep, { AppointmentSuccessView, type FormValues } from "@/components/randevu-contact-step";

const steps = [
  { title: "Tarih ve Saat" },
  { title: "İletişim Bilgileri" },
  { title: "Özet" },
  { title: "Onay" },
];

export default function RandevuAlStepper() {
  const [activeStep, setActiveStep] = useState(1);
  const [appointmentSelection, setAppointmentSelection] = useState<AppointmentSelection | null>(null);
  const [contactFormValues, setContactFormValues] = useState<FormValues | null>(null);

  const handleContinue = (date: Date, time: string) => {
    setAppointmentSelection({ date, time });
    setActiveStep(2);
  };

  const handleContactContinue = (values: FormValues) => {
    setContactFormValues(values);
    setActiveStep(3);
  };

  return (
    <Stepper
      value={activeStep}
      onValueChange={setActiveStep}
      className="space-y-8"
    >
      <StepperNav className="gap-3.5 mb-15">
        {steps.map((step, index) => (
          <StepperItem key={index} step={index + 1} className="relative flex-1 items-start">
            <StepperTrigger className="flex flex-col items-start justify-center gap-3.5 grow">
              <StepperIndicator className="bg-border rounded-full h-1 w-full data-[state=active]:bg-accent data-[state=completed]:bg-accent" />
              <div className="flex flex-col items-start gap-1">
                <StepperTitle className="text-start font-semibold group-data-[state=inactive]/step:text-muted-foreground">
                  {step.title}
                </StepperTitle>
              </div>
            </StepperTrigger>
          </StepperItem>
        ))}
      </StepperNav>

      <StepperPanel className="text-sm">
        <StepperContent value={1} className="flex flex-col gap-4">
          <AppointmentBooking onContinue={handleContinue} />
        </StepperContent>
        <StepperContent value={2} className="flex flex-col gap-4">
          <RandevuContactStep
            appointmentSelection={appointmentSelection}
            onBack={() => setActiveStep(1)}
            onContinue={handleContactContinue}
            initialFormValues={contactFormValues}
          />
        </StepperContent>
        <StepperContent value={3} className="flex flex-col gap-4">
          {contactFormValues ? (
            <RandevuContactStep
              mode="summary"
              appointmentSelection={appointmentSelection}
              initialFormValues={contactFormValues}
              onBack={() => setActiveStep(2)}
              onSuccess={() => setActiveStep(4)}
            />
          ) : (
            <div className="flex items-center justify-center min-h-[200px]">Randevu özeti (yakında)</div>
          )}
        </StepperContent>
        <StepperContent value={4} className="flex flex-col gap-4">
          <AppointmentSuccessView />
        </StepperContent>
      </StepperPanel>
    </Stepper>
  );
}
