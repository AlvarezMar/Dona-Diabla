import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({
    name: 'credentials'
})
export class Credential{
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 15
    })
    username: string

    @Column({
        length: 15
    })
    password: string
}