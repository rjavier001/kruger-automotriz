import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "../components/admin/hooks/useForm";

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    last: "",
    email: "",
    phone: "",
    message: "",
  });

  const [
    { user_name, user_last, user_email, user_phone, message },
    handleInputChange,
    reset,
  ] = useForm({
    user_name: "",
    user_last: "",
    user_email: "",
    user_phone: "",
    message: "",
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_uyhf86h",
        "template_g7mejle",
        form.current,
        "HrjJi1zhHn2omSP9m"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("mensaje enviado");
          reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Grid textAlign="center">
      <Card
        style={{
          maxWidth: 450,
          padding: "20px 5px",
          margin: "0 auto",
          borderRadius: "20px",
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5">
            Contact Us
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            gutterBottom
          >
            Nuestro equipo se pondrá en contacto en las próximas 24 horas.
          </Typography>
          <form ref={form} onSubmit={sendEmail}>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  placeholder="Enter first name"
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  required
                  type="text"
                  name="user_name"
                  value={user_name}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  placeholder="Enter last name"
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  required
                  type="text"
                  name="user_last"
                  value={user_last}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  placeholder="Enter email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  required
                  type="email"
                  name="user_email"
                  value={user_email}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="number"
                  placeholder="Enter phone number"
                  label="Phone"
                  variant="outlined"
                  fullWidth
                  required
                  name="user_phone"
                  value={user_phone}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  multiline
                  rows={4}
                  placeholder="Type your message here"
                  variant="outlined"
                  fullWidth
                  required
                  name="message"
                  value={message}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  value="Send"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ContactPage;
