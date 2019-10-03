import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

export interface IEmployees {
    emp_no: number
    first_name: string
    last_name: string
}

@Entity()
export class Employees {

    @PrimaryGeneratedColumn()
    emp_no: number;

    @Column({
        length: 20
    })
    last_name: string

    @Column({
        length: 20
    })
    first_name: string
}