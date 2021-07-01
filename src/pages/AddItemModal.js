import React, { Component } from "react";
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
  IonDatetime
} from "@ionic/react";

class AddItemModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    // see - https://reactjs.org/docs/uncontrolled-components.html
    this.subject = React.createRef();
    this.body = React.createRef();
    this.dueDate = React.createRef();
  }

  render() {
    return (
      <IonModal
        isOpen={this.props.showModal}
        onDidDismiss={() => this.props.onDidDismiss()}
      >
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>New Message</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent padding>
          <IonItem>
            <IonLabel position="stacked">Message</IonLabel>
            <IonTextarea rows={6} ref={this.body} name="body" />
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
                        dueDate: this.dueDate.current.value,
                        body: this.body.current.value,
                        subject: this.subject.current.value
                      };
                      this.props.onDidDismiss({ result: returnValues });
                      this.dueDate.current.value = null;
                      this.body.current.value = null;
                      this.subject.current.value = null;
                    }}
                  >
                    Save
                  </IonButton>
                </IonCol>
                <IonCol>
                  <IonButton
                    expand="full"
                    onClick={() => {
                      this.dueDate.current.value = null;
                      this.body.current.value = null;
                      this.subject.current.value = null;
                      this.props.onDidDismiss();
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
  }
}

export default AddItemModal;
