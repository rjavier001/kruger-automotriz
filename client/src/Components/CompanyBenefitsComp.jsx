import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SecurityIcon from "@mui/icons-material/Security";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const CompanyBenefitsComp = () => {
  return (
    <Stack
      direction={{ md: "row", sx: "column" }}
      sx={{ flex: 1, justifyContent: "space-around" }}
    >
      <Stack sx={styles.boxes}>
        <AirportShuttleIcon sx={{ fontSize: 70 }} />
        <Typography variant="h6">Envios Nacionales</Typography>
        Realizamos envíos a nivel nacional a través de zoom y si te encuentras
        en Caracas también puedes retirar tu compra en nuestra sede
      </Stack>

      <Stack sx={styles.boxes}>
        <CreditCardIcon sx={{ fontSize: 70 }} />
        <Typography variant="h6">Opciones de pago</Typography>
        Zelle, Paypal, tarjetas de crédito extranjeras, transferencias bancarias
        a cuentas en divisas, efectivo y transferencias a Bancos Nacionales
      </Stack>

      <Stack sx={styles.boxes}>
        <SecurityIcon sx={{ fontSize: 70 }} />
        <Typography variant="h6">Compra Con Confianza</Typography>
        Somos una plataforma moderna y segura diseñada para brindarte total
        tranquilidad y confianza al comprar los repuestos que tu vehículo
        necesita
      </Stack>

      <Stack sx={styles.boxes}>
        <SupportAgentIcon sx={{ fontSize: 70 }} />
        <Typography variant="h6">Soporte</Typography>
        Contamos con un equipo técnico y de soporte que te asesora y acompaña en
        todo el proceso de compra para brindarte una gran experiencia
      </Stack>
    </Stack>
  );
};

export default CompanyBenefitsComp;

export const styles = {
  boxes: {
    alignItems: "center",
    textAlign: "center",
  },
};
