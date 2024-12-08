import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Mail, Phone } from "lucide-react";

export const Termsconditions = () => {
  return (
    <div className="grid gap-4 px-3 text-justify font-comfortaa">
      <div className="max-w-3xl mx-auto text-muted-foreground py-2">
        <h2 className="text-xl font-semibold text-foreground mb-4"></h2>
        <p>
          By using the health consultation booking service on HealthHub, you
          agree to the following terms:
        </p>
        <h2 className="text-xl font-semibold text-foreground mt-4 mb-4">
          Service Scope
        </h2>
        <p>
          HealthHub connects users with licensed healthcare providers for
          consultations. We act as a facilitator and do not provide medical
          services directly.
        </p>
        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
          Booking and Payment
        </h2>
        <p>
          Consultations are subject to provider availability. Fees must be paid
          in full at the time of booking. All fees are non-refundable unless
          specified in the cancellation policy.
        </p>
        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
          Cancellation Policy
        </h2>
        <div>
          <p className="pt-2 font-semibold text-foreground/75">
            User Cancellations:
          </p>
          <ul className="list-none pl-4 py-1">
            <li>
              Cancellations made at least [X hours/days] in advance may be
              eligible for a refund.
            </li>
          </ul>
          <p className="pt-2 font-semibold text-foreground/75">
            Provider Cancellations:
          </p>
          <ul className="list-none pl-4 py-1">
            <li>
              If the provider cancels, you may request a refund or reschedule.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
            User Responsibilities
          </h2>
          <ul className="list-none py-1">
            <li>
              Provide accurate health information for effective consultations.
            </li>
            <li>Attend appointments on time.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
            Limitations of Liability
          </h2>
          <ul className="list-none py-1">
            <li>
              HealthHub is not liable for the quality of care provided or
              outcomes of consultations.
            </li>
            <li>
              Consultations are not a substitute for emergency medical care.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
            Privacy
          </h2>
          <ul className="list-none py-1">
            <li>
              Your data will be handled securely and in accordance with our
              [Privacy Policy].
            </li>
            <li>
              Consultations are not a substitute for emergency medical care.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
            Contact
          </h2>
          <p>For questions, contact us at:</p>
          <ul className="list-none  py-1">
            <li className="flex"> 
              <Link href="mailto:akshatanwar24@gmail.com">
                <Button variant="ghost">
                  <Mail />
                </Button>
              </Link>
                <Button
                  variant="ghost"
                  className="flex items-center"
                  onClick={() => window.open("tel:+919461767567", "_self")}
                >
                  <Phone />
                </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
