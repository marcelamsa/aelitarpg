
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IonPage, IonContent, IonSpinner } from '@ionic/react';
import type { User } from '@supabase/supabase-js';
import { supabase } from '../services/supabase';
import './Perfil.css';

const Perfil: React.FC = () => {
  const [usuario, setUsuario] = useState<User | null>(null);
  const [carregando, setCarregando] = useState(true);
  const navigate = useNavigate();

  
  useEffect(() => {
    let ativo = true;

    
const verificarLogin = async () => {
  try {
    console.log('Verificando login...');

    const { data, error } = await supabase.auth.getUser();
    console.log('Usuário:', data.user?.id);
console.log('Erro Supabase:', error?.message);

    if (!ativo) return;

    console.log('Usuário encontrado:', !!data.user);
    console.log('Erro:', error?.message);

    if (error || !data.user) {
      console.error('Sessão não encontrada:', error?.message);
      return;
    }

    setUsuario(data.user);
    console.log('Login confirmado!');

  } catch (error) {
    console.error('Erro na autenticação:', error);

  } finally {
    if (ativo) {
      setCarregando(false);
    }
  }
};


    void verificarLogin();

    // OBSERVAR ALTERAÇÕES NA SESSÃO
    const { data: { subscription } } =
      supabase.auth.onAuthStateChange((evento) => {
        if (evento === 'SIGNED_OUT') {
          navigate('/home', { replace: true });
        }
      });

    return () => {
      ativo = false;
      subscription.unsubscribe();
    };
  }, [navigate]);

  
  const sair = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error('Erro ao sair:', error.message);
      alert('Não foi possível sair da conta.');
      return;
    }

    navigate('/home', { replace: true });
  };


  
if (carregando) {
  return (
    <IonPage>
      <IonContent>
        <div className="perfil-carregando">
          <IonSpinner name="crescent" />
          <p>Carregando seu perfil...</p>
        </div>
      </IonContent>
    </IonPage>
  );
}

if (!usuario) {
  return (
    <IonPage>
      <IonContent>
        <div className="perfil-carregando">
          <h2>Não foi possível carregar o perfil.</h2>
          <p>A sessão do Discord não foi encontrada.</p>

          <button onClick={() => navigate('/home', { replace: true })}>
            Voltar ao login
          </button>
        </div>
      </IonContent>
    </IonPage>
  );
}


  const dados = usuario.user_metadata ?? {};

  const nome =
    dados.full_name ||
    dados.name ||
    dados.user_name ||
    dados.preferred_username ||
    'Usuário';

  const username =
    dados.preferred_username ||
    dados.user_name ||
    dados.name ||
    'discord';

  const avatar = dados.avatar_url || dados.picture;


  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="perfil-container">

          <div className="perfil-card">
            {avatar && (
              <img
                src={avatar}
                alt="Avatar do Discord"
                className="perfil-avatar"
              />
            )}

            <h1>{nome}</h1>
            <p>@{username}</p>

            <button type="button" onClick={sair}>
              Sair da conta
            </button>
          </div>

          <section className="perfil-historia">
            <h2>Minha história</h2>
            <p>Ainda não há história escrita.</p>
          </section>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Perfil;
