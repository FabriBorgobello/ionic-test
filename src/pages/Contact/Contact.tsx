import * as React from "react";
import { IonContent, IonPage } from "@ionic/react";
import NavBar from "../../components/NavBar/NavBar";

const Contact = () => {
  return (
    <IonPage>
      <NavBar name="Contact" />
      <IonContent className="ion-padding">UI goes here...</IonContent>
    </IonPage>
  );
};

export default Contact;
