import { PostagemModel } from "./PostagemModel";

export class TemaModel{
    public id: number;
    public primarioTema: string;
    public secundarioTema: string;
    public eventosTema: string;
    public postagens: PostagemModel[];
}