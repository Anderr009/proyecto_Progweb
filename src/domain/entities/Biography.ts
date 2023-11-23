import BaseAuthor from "../core/BaseAuthor";
import { Column } from "typeorm"
export default class Biography extends BaseAuthor {
    @Column()
    biografia: string
}