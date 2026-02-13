import React from "react";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type ContactInfoProps = React.ComponentProps<"div"> & {
  icon: LucideIcon;
  label: string;
  value: string;
};

type ContactCardProps = React.ComponentProps<"div"> & {
  title?: string;
  description?: string;
  contactInfo?: ContactInfoProps[];
  appointmentSummary?: React.ReactNode;
  formSectionClassName?: string;
};

export function ContactCard({
  title = "Contact With Us",
  description = "If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day.",
  contactInfo,
  appointmentSummary,
  className,
  formSectionClassName,
  children,
  ...props
}: ContactCardProps) {
  return (
    <div
      className={cn(
        "bg-card border relative grid h-full w-full shadow md:grid-cols-2 lg:grid-cols-3",
        className,
      )}
      {...props}
    >
      <div className="flex flex-col justify-between lg:col-span-2">
        <div className="relative flex h-full min-h-0 flex-col gap-4 px-4 pt-8 pb-5 md:px-8 md:pt-8 md:pb-5">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl shrink-0">{title}</h1>
          <p className="text-muted-foreground max-w-xl shrink-0 text-sm md:text-base lg:text-lg">{description}</p>
          <div className="grid shrink-0 gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
            {contactInfo?.map((info, index) => (
              <ContactInfo key={index} {...info} />
            ))}
          </div>
          {appointmentSummary}
        </div>
      </div>
      <div
        className={cn(
          "bg-muted/40 flex h-full w-full items-start border-t p-5 md:col-span-1 md:border-t-0 md:border-l",
          formSectionClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}

function ContactInfo({
  icon: Icon,
  label,
  value,
  className,
  ...props
}: ContactInfoProps) {
  return (
    <div className={cn("flex items-center gap-3 py-3", className)} {...props}>
      <div className="bg-muted/40 rounded-lg p-3">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-muted-foreground text-xs">{value}</p>
      </div>
    </div>
  );
}
