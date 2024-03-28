import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"

@Entity({
    name: 'appointments'
})
export class Appointment{
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 10
    })
    date: string
     
    @Column({
        length: 10
    })
    time: string
     
    @Column('integer')
    userId: number
     
    @Column()
    status: 'active' | 'cancelled'

    @ManyToOne(() => User, (user) => user.appointments)
    user: User
}