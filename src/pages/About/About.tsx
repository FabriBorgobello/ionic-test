import * as React from "react";
import { IonContent, IonPage } from "@ionic/react";
import NavBar from "../../components/NavBar/NavBar";

const About = () => {
  return (
    <IonPage>
      <NavBar name="About" />
      <IonContent className="ion-padding">UI goes here...</IonContent>
    </IonPage>
  );
};

export default About;
