import { useEffect, useState } from 'react';
import { supabase } from '../services/supabase';

interface HistoriaEditorProps{
    usuarioId: string;
}

const HistoriaEditor: React.FC<HistoriaEditorProps> = ({
    usuarioId
}) => {
    const [historia, setHistoria] = useState('');
    const [avatarPath, setAvatarPath] =
    useState<string | null>(null);

    const [carregando, setCarregando] = useState(true);
    const [salvando, setSalvando] = useState(false);
    const [mensagem, setMensagem] = useState('');

    useEffect(() => {
        let ativo = true;

        const carregarHistoria = async() => {
            const { data, error } = await supabase
            .from('perfis')
            .select('historia, avatar_path')
            .eq('usuario_id', usuarioId)
            .maybeSingle();

            if(!ativo) return;

            if(error){
                setMensagem('Erro ao carregar Historia.');

            } else if(data){
                setHistoria(data.historia);
                setAvatarPath(data.avatar_path);

            }

            setCarregando(false);
        };

        void carregarHistoria();

        return () => {
            ativo = false;
        };

    }, [usuarioId]);

    const salvarHistoria = async () => {
        setSalvando(true);
        setMensagem('');

        const { error } = await supabase
        .from('perfis')
        .upsert({
            usuario_id: usuarioId,
            historia: historia,
            avatar_path: avatarPath,
            atualizado_em: new Date().toISOString()
        }, {
            onConflict: 'usuario_id'
        });

        if(error) {
            console.error(error);
            setMensagem('Erro ao guardar a história');

        } else {
            setMensagem('Historia guardada com sucesso!');
        } catch (error) {
        console.error(error);
        setMensagem('Não foi possível guardar a história.');

    } finally {
        setSalvando(false);
    }

};
