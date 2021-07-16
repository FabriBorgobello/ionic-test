import * as React from "react";
import { IonContent, IonPage } from "@ionic/react";
import NavBar from "../../components/NavBar/NavBar";

const Configuration = () => {
  return (
    <IonPage>
      <NavBar name="Configuration" />
      <IonContent className="ion-padding">UI goes here...</IonContent>
    </IonPage>
  );
};

export default Configuration;
