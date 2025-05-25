"use client";

import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    names: "",
    email: "",
    subject: "",
    message: "",
  });
  const [err, setErr] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const errMsg = {};
    if (!formData.email) {
      errMsg.email = "email is required!";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errMsg.email = "Please enter a valid email address!";
    }
    if (!formData.subject) {
      errMsg.subject = "subject is required!";
    }
    if (!formData.message) {
      errMsg.message = "message is required!";
    }
    if (!formData.names) {
      errMsg.names = "Please enter your names!";
    }
    if (Object.keys(errMsg).length === 0) {
      try {
        setSubmitting(true);
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (!res.ok) {
          toast("Could not send message", {
            description: data.message,
          });
          return;
        }
        toast("Message sent successfully", {
          description: "We will be in touch with you. Please be patient.",
        });
        setTimeout(() => {
          window.location.reload();
        }, 4000);
      } catch (err) {
        toast("Failed to send message", {
          description:
            "Your message could not be sent due to network issues or internal server errors. Please try again later.",
        });
      } finally {
        setSubmitting(false);
      }
      console.log("formData", formData);
    }
    setErr(errMsg);
  };

  return (
    <Card className="p-8 mb-8">
      <form onSubmit={handleOnSubmit}>
        <div className="flex flex-col gap-2 justify-center">
          <label> Full names </label>
          <Input
            placeholder="Enter your full names."
            name="names"
            onChange={handleOnChange}
            style={err.names ? { borderColor: "red" } : {}}
          />
          {err.names && <p className="text-red-500 text-sm">{err.names}</p>}
        </div>
        <div className="flex flex-col gap-2 justify-center mt-4">
          <label> Email </label>
          <Input
            placeholder="Please enter your email."
            name="email"
            onChange={handleOnChange}
            style={err.email ? { borderColor: "red" } : {}}
          />
          {err.email && <p className="text-red-500 text-sm">{err.email}</p>}
        </div>
        <div className="flex flex-col gap-2 justify-center mt-4">
          <label> Subject </label>
          <Input
            placeholder="Subject of contacting us."
            name="subject"
            onChange={handleOnChange}
            style={err.subject ? { borderColor: "red" } : {}}
          />
          {err.subject && <p className="text-red-500 text-sm">{err.subject}</p>}
        </div>
        <div className="flex flex-col gap-2 justify-center mt-4">
          <label> Message </label>
          <Textarea
            placeholder="Please type out your message."
            name="message"
            onChange={handleOnChange}
            style={err.message ? { borderColor: "red" } : {}}
          />
          {err.message && <p className="text-red-500 text-sm">{err.message}</p>}
        </div>
        <Button variant="outline" className="mt-8">
          {!submitting ? "SUBMIT" : "SUBMITTING..."}
        </Button>
      </form>
    </Card>
  );
}
