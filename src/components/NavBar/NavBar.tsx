import * as React from "react";
import { IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar } from "@ionic/react";

interface Props {
  name: string;
}

const NavBar = ({ name }: Props) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>{name}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default NavBar;
