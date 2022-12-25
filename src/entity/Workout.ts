import { Length, MaxLength } from "class-validator";
import { ObjectType } from "type-graphql";
import { Field } from "type-graphql/dist/decorators";
import { Int } from "type-graphql/dist/scalars";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@ObjectType()
@Entity()
export class Workout extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ unique: true })
  @MaxLength(30)
  title: string;

  @Field()
  @Column()
  @Length(30, 255)
  description: string;

  @Field()
  @Column()
  muscle: string;

  @Field()
  @CreateDateColumn()
  creationDate: Date;
}
