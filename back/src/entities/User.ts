import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Credential } from "./Credential"
import { Appointment } from "./Appointment"

@Entity({
    name: 'users'
})
export class User {
    @PrimaryGeneratedColumn()
    id: number //Llave primaria auto generada.

    @Column({
        length: 50
    })
    name: string //VARCHAR(50)

    @Column({
        length: 50,
    })
    email: string

    @Column({
        length: 10
    })
    birthdate: string

    @Column('bigint')
    nDni: number

    @OneToOne(() => Credential)
    @JoinColumn()
    credential: Credential

    @OneToMany(() => Appointment, (appointment) => appointment.user)
    appointments: Appointment[]
}