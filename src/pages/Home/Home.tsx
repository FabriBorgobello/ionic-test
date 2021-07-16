import * as React from "react";
import { IonContent, IonPage } from "@ionic/react";
import NavBar from "../../components/NavBar/NavBar";

const Home = () => {
  return (
    <IonPage>
      <NavBar name="Home" />
      <IonContent className="ion-padding">UI goes here...</IonContent>
    </IonPage>
  );
};

export default Home;
