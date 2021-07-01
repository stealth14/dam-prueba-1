import React, { useState } from "react";
import {
  IonModal,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonInput,
  IonLabel,
  IonTextarea,
  IonGrid,
  IonRow,
  IonCol,
  IonFooter,
  IonDatetime,
} from "@ionic/react";

const AddItemModal2 = ({ showModal, onDidDismiss, currentUser, body, setBody }) => {
  const [subject, setSubject] = useState("");
  const [dueDate, setDueDate] = useState("");

  return (
    <IonModal isOpen={showModal} onDidDismiss={() => onDidDismiss()}>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>New Message</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent padding>

        <IonItem>
          <IonLabel position="stacked">Message</IonLabel>
          <IonTextarea
            rows={6}
            onIonChange={(e) => setBody(e.detail.value)}
            name="body"
          />
        </IonItem>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton
                  expand="full"
                  onClick={() => {
                    let returnValues = {
                      dueDate,
                      body,
                      subject: currentUser,
                    };
                    onDidDismiss({ result: returnValues });
                    setDueDate("");
                    setBody("");
                    setSubject("");
                  }}
                >
                  Save
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton
                  expand="full"
                  onClick={() => {
                    setDueDate("");
                    setBody("");
                    setSubject("");
                    onDidDismiss();
                  }}
                >
                  Cancel
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonFooter>
    </IonModal>
  );
};

export default AddItemModal2;
