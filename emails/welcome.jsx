import {
  Heading,
  Container,
  Html,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export default function Email({ formData }) {
  return (
    <Html>
      <Container style={styles.container}>
        <Heading style={styles.heading}> Incomming contact </Heading>
        {[
          { label: "Names", value: formData?.names },
          { label: "Email", value: formData?.email },
          { label: "Subject", value: formData?.subject },
          { label: "Message", value: formData?.message },
        ].map((item, index) => (
          <Section key={index} style={styles.section}>
            <Text style={styles.label}> {item.label} </Text>
            <Text style={styles.value}> {item.value} </Text>
          </Section>
        ))}
      </Container>
    </Html>
  );
}

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    maxWidth: 500,
    margin: "0 auto",
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
    color: "#333",
  },
  section: {
    marginBottom: 12,
  },
  label: {
    fontWeight: 600,
    color: "#555",
  },
  value: {
    color: "#777",
  },
};
