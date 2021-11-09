import { TemaModel } from "./TemaModel";
import { UsuarioModel } from "./UsuarioModel";

export class PostagemModel{
    public id: number;
    public textoPostagem: string;
    public anexoPostagem: string;
    public localizacaoPostagem:string;
    public privacidade: string;
    public usuarioPostagem: UsuarioModel;
    public temaPostagem: TemaModel;
}