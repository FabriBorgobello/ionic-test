import { IonContent, IonFooter, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote } from "@ionic/react";

import { useLocation } from "react-router-dom";
import {
  bookmarkOutline,
  cogOutline,
  cogSharp,
  homeOutline,
  homeSharp,
  informationOutline,
  informationSharp,
  logOutOutline,
  logOutSharp,
  peopleOutline,
  peopleSharp,
} from "ionicons/icons";
import "./Menu.css";

interface AppPage {
  title: string;
  iosIcon: string;
  mdIcon: string;
  url?: string;
  action?: () => void;
}

const appPages: AppPage[] = [
  {
    title: "Home",
    url: "/home",
    iosIcon: homeOutline,
    mdIcon: homeSharp,
  },
  {
    title: "About",
    url: "/about",
    iosIcon: informationOutline,
    mdIcon: informationSharp,
  },
  {
    title: "Contact",
    url: "/contact",
    iosIcon: peopleOutline,
    mdIcon: peopleSharp,
  },
];

const bottomAppPages: AppPage[] = [
  {
    title: "Configuration",
    url: "/configuration",
    iosIcon: cogOutline,
    mdIcon: cogSharp,
  },
  {
    title: "Log out",
    action: logOut,
    iosIcon: logOutOutline,
    mdIcon: logOutSharp,
  },
];

function logOut() {}

const Menu = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <div className="menu-content">
          <IonList id="inbox-list">
            <IonListHeader>Username</IonListHeader>
            <IonNote>username@email.com</IonNote>
            {appPages.map((appPage, index) => (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={location.pathname === appPage.url ? "selected" : ""}
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            ))}
          </IonList>
          <IonList id="configuration">
            {bottomAppPages.map((appPage, index) => (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={location.pathname === appPage.url ? "selected" : ""}
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            ))}
          </IonList>
        </div>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
