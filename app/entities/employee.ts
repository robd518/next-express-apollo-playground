import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Employee {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 20
    })
    lastname: string;

    @Column({
        length: 20
    })
    firstname: string;
}