import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Pokemon extends Document {

    @Prop({
        unique: true,
        index: true,
    })
    name: String;

    @Prop({
        unique: true,
        index: true,
    })
    no: number; //numero de pokemon
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);