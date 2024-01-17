import {Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";
import {Country} from "../../../country/entities/country.entity";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:false})
    name: string;

    @OneToOne(() => Country, {cascade:true})
    @JoinColumn()
    country: Country
}
