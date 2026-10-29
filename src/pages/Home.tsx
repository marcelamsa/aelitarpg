import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { supabase } from '../services/supabase';
import './Home.css';


const Home: React.FC = () => {

 const loginDiscord = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'discord',
    options: {
      redirectTo: `${window.location.origin}/perfil`,
      scopes: 'identify',
    },
  });

  if (error) {
    console.error('Erro ao conectar Discord:', error.message);
    alert('Erro ao conectar com Discord!');
  }
};

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className = "principal-container">
          <h1 className = "titulo-principal"> Metanoia </h1>

          <div className="caixa-frase">
            <p className="texto-citacao">Seja bem vindo ao estado da transmutação da alma, o estado atual da mente.</p>
            </div>

            <button className="conecte-discord" onClick={loginDiscord}>
              Conecte ao seu Discord Já!
            </button>
          </div>
      </IonContent>
    </IonPage>
  );
};


export default Home;
