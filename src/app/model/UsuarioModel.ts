import { PostagemModel } from "./PostagemModel";

export class UsuarioModel{
    public id: number;
    public nomeUsuario: string;
    public emailUsuario: string;
    public senhaUsuario: string;
    public postagens: PostagemModel[];
    public foto: string;
}